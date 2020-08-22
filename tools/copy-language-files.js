import path from 'path'
import { ensureDirSync, copySync } from 'fs-extra'
import { resolve } from 'path'

const langsFilesPath = path.dirname(require.resolve('formbuilder-languages'))
const targetDir = resolve(__dirname, '../demo/assets/lang')

ensureDirSync(targetDir)

copySync(langsFilesPath, 'demo/assets/lang/')
