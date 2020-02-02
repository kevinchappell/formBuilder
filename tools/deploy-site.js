const { exec } = require('child_process')
const pkg = require('../package.json')

const commands = [
  `cd ${process.env.FORMBUILDER_WEBSITE_DIR || 'site'}/`,
  `npm version ${pkg.version}`,
  'git push origin master',
]

// try to deploy the demo
try {
  exec(commands.join(' && '), err => !err && console.log('Site successfully deployed'))
} catch (e) {
  console.error(e)
}
