const { exec } = require('child_process')
const pkg = require('../package.json')

const commands = [
  `npm version ${pkg.version}`,
  'git push origin master',
]

const cwd = process.env.FORMBUILDER_WEBSITE_DIR || 'site'

// try to deploy the demo
try {
  exec(commands.join(' && '), { cwd }, err => !err && console.log('Site successfully deployed'))
} catch (e) {
  console.error(e)
}
