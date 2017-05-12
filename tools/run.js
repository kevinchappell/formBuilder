/**
 * format time
 * @param  {String} time
 * @return {String} formatted time
 */
const format = time =>
time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

const run = (fn, options) => {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const optsString = options ? `(${options})` : '';
  const start = new Date();
  console.log(
    `[${format(start)}] Starting '${optsString}'...`
  );
  return task(options).then(resolution => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(
      `[${format(end)}] Finished '${task.name}${optsString}' after ${time} ms`
    );
    return resolution;
  });
};

if (require.main === module && process.argv.length > 2) {
  delete require.cache[__filename]; // eslint-disable-line no-underscore-dangle
  const module = require(`./${process.argv[2]}.js`).default;
  run(module).catch(err => {
    console.error(err.stack); process.exit(1);
  });
}

export default run;
