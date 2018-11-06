const { exec } = require('child_process');

const onFinish = (err, cb) => {
  if (!err) {
    return cb();
  } else {
    console.error(err);
    return process.exit(1);
  }
};

// Deploy the demo and site.
exec('git push origin $(git subtree split --prefix demo $(git rev-parse --abbrev-ref HEAD)):gh-pages --force', err =>
  onFinish(err, () => console.log('Demo successfully deployed'))
);
