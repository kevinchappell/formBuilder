import { ensureDirSync } from 'fs-extra'
import pkg from '../package.json'
import { resolve } from 'path'
import concat from 'concat-files'

const targetDir = resolve(__dirname, '../demo/assets/js')

ensureDirSync(targetDir)
const vendor = Object.keys(pkg.dependencies).map(require.resolve)

/**
 * Concatenates the vendor files into a single vendor file for the demo
 * @return {Function} concat
 */
concat(vendor, `${targetDir}/vendor.js`, err => {
  if (err) throw err
})
