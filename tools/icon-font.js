import fs from 'fs'
import path from 'path'
import http from 'http'
import { Spinner } from 'clui'
import unzip from 'unzipper'
import opener from 'opener'
import inquirer from 'inquirer'
import replace from 'replace-in-file'
import request from 'request'
import { updatePackageJSON, spinner } from './utils'
import pkg from '../package.json'

const {
  config: { files, fontServer },
} = pkg

// Fetch current session token from fontServer
const getFontelloToken = () => {
  return new Promise((resolve, reject) => {
    const req = request.post(fontServer, (err, resp, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body.trim())
      }
    })
    const form = req.form()
    form.append('config', fs.createReadStream(`${files.fonts}/config.json`))
  })
}

// Process entries in downloaded zip file
const processEntry = entry => {
  const splitPath = entry.path.split('/')
  const baseName = splitPath.shift()
  const fileName = splitPath.pop()
  const fonts = [`${baseName}/config.json`, `${baseName}/font/formbuilder-icons.woff`]
  const css = [`${baseName}/css/formbuilder-icons-embedded.css`]
  if (fonts.includes(entry.path)) {
    const targetDir = `${__dirname}/../${files.fonts}`
    const targetFile = `${targetDir}/${fileName}`
    entry.pipe(fs.createWriteStream(targetFile))
  } else if (css.includes(entry.path)) {
    const targetDir = `${__dirname}/../${files.sass}`
    const targetFile = `${targetDir}/base/_font.scss`
    entry.pipe(fs.createWriteStream(targetFile))
  } else {
    entry.autodrain()
  }
}

// Download and Unzip the updated font file
const fontSave = async fontelloToken => {
  const token = fontelloToken || (await getFontelloToken())

  const status = new Spinner('Importing Font', spinner)
  status.start()

  http
    .get(`${fontServer}/${token}/get`)
    .on('response', res => {
      // stream directly instead of download and unpack
      res.pipe(unzip.Parse()).on('entry', processEntry)
      const total = parseInt(res.headers['content-length'], 10)
      let count = 0
      res.on('data', data => {
        count += data.length
        const progressPercent = parseInt((count / total) * 100, 10)
        status.message(`Importing Font ${progressPercent}%`)
      })
    })
    .on('close', async () => {
      status.message('Fixing CSS files...')
      // Fixed the path of the imported font files
      const targetFile = path.resolve(files.sass, 'base', '_font.scss')
      // remove truetype definition
      await replace({
        files: targetFile,
        from: [
          /,\n.*url\('.*\('.*truetype'\)/gm,
          /\('[\s\S]*?format\('embedded-opentype'\),[\s\S]*?url/m,
          /^@font-face[\s\S]*?}\n/m,
        ],
        to: '',
      })

      status.message('CSS Files Fixed')
      status.stop()
    })
}

// Edit the icon Font
const fontEdit = async () => {
  const fontelloToken = await getFontelloToken()
  const whatNext = {
    type: 'list',
    name: 'nextAction',
    choices: [
      {
        name: 'Download and Import Font',
        value: fontSave,
        short: 'Download',
      },
      {
        name: 'Exit without Saving',
        value: () => process.exit(0),
        short: 'Exit',
      },
    ],
    message: 'What would you like to do next?',
  }
  // Save sessions token
  updatePackageJSON({ config: { fontelloToken } })
  opener(`${pkg.config.fontServer}/${fontelloToken}`)
  const { nextAction } = await inquirer.prompt([whatNext])
  return nextAction(fontelloToken)
}

const iconFont = () => {
  const [action] = process.argv.slice(2)
  const fontActions = {
    edit: fontEdit,
    save: fontSave,
  }
  return fontActions[action] ? fontActions[action]() : fontActions['edit']()
}

export default iconFont()
