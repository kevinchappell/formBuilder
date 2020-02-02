const { exec } = require('child_process')
const pkg = require('../package.json')

const commands = [
  'git add --all',
  `git commit -am "${pkg.version}"`,
  'git push origin $(git subtree split --prefix demo $(git rev-parse --abbrev-ref HEAD)):gh-pages --force',
]

// try to deploy the demo
try {
  exec(commands.join(' && '), err => !err && console.log('Demo successfully deployed'))
} catch (e) {
  console.error(e)
}
