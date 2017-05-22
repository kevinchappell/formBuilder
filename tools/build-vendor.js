import pkg from '../package.json';
import {resolve} from 'path';
import concat from 'concat-files';

const vendor = Object.keys(pkg.dependencies).map(module => require.resolve(module));

/**
 * Concatenates the vendor files into a single vendor file for the demo
 * @return {Function} concat
 */
async function concatVendorFiles() {
  return concat(vendor, resolve(__dirname, '../demo/assets/js/vendor.js'), function(err) {
    if (err) throw err;
  });
}

export default concatVendorFiles;
