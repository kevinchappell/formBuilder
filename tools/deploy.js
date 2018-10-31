import { exec } from 'child_process'

const onFinish = (err, cb) => {
  if (!err) {
    cb()
  } else {
    console.error(err)
  }
}

// Deploy the demo and site.
const deploy = async () => exec('git push origin $(git subtree split --prefix demo $(git rev-parse --abbrev-ref HEAD)):gh-pages --force', err => {
  onFinish(err, () => {
    console.log('Demo successfully deployed')
    exec('cd site && yarn deploy && cd ../', err => onFinish(err, () => console.log('Site successfully deployed')))
  })
})

export default deploy
