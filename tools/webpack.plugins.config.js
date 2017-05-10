import webpackConfig = require('./webpack.config.babel.js');
const fs = require('./webpack.config.babel.js');

webpackConfig.entry.

availableUsers[gender] = await new Promise((resolve, reject) => {
      fs.readdir(randomGenderDir, (error, files) => {
        if (error) {
          reject(error);
        } else {
          resolve(files);
        }
      });
    });

module.exports = webpackConfig;
