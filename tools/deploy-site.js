const path = require('path')
const { exec } = require('child_process')
const pkg = require('../package.json')

const commands = [
  `npm version ${pkg.version}`,
  'git push origin master',
]

const cwd = path.resolve(__dirname, process.env.FORMBUILDER_WEBSITE_DIR)

// try to deploy the demo
try {
  exec(commands.join(' && '), { cwd }, err => !err && console.log('Site successfully deployed'))
} catch (e) {
  console.error(e)
}
