const { exec } = require('child_process')
const pkg = require('../package.json')

const onFinish = (err, cb) => {
  if (!err) {
    return cb()
  } else {
    console.error(err)
    return process.exit(1)
  }
}

const commands = [
  'mv gh-pages/.git demo/',
  'cd demo',
  'git add --all',
  `git commit -am "demo version: ${pkg.version}"`,
  'git push origin gh-pages --force',
  'cd ../',
  'rm -rf gh-pages/ demo/',
]

// Deploy the demo and site.
exec(commands.join(' && '), err => onFinish(err, () => console.log('Demo successfully deployed')))
