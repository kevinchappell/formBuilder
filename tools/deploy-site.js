const { exec } = require('child_process')
const pkg = require('../package.json')

const siteReo = pkg.repository.url.replace(/.git$/, '-site.git')
const siteDir = process.env.FORMBUILDER_WEBSITE_DIR || 'site'

const commands = [
  `git clone ${siteReo} ${siteDir}`,
  `cd ${siteDir}/`,
  `npm version ${pkg.version}`,
  'git push origin master',
]

// try to deploy the demo
try {
  exec(commands.join(' && '), err => !err && console.log('Site successfully deployed'))
} catch (e) {
  console.error(e)
}
