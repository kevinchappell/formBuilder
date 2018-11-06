import { exec } from 'child_process'

const onFinish = (err, cb) => {
  if (!err) {
    return cb()
  } else {
    console.error(err)
    return process.exit(1)
  }
}

const deploySiteCommands = ['git submodule update --init --recursive', 'yarn docs', 'cd site', 'yarn deploy', 'cd ../']

// Deploy the demo and site.
const deploy = () => exec(
  'git push origin $(git subtree split --prefix demo $(git rev-parse --abbrev-ref HEAD)):gh-pages --force',
  err =>
    onFinish(err, () => {
      console.log('Demo successfully deployed')
      return exec(deploySiteCommands.join(' && '), err =>
        onFinish(err, () => console.log('Site successfully deployed'))
      )
    })
)

export default deploy
