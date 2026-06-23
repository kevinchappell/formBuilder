import { createReadStream, createWriteStream, readdirSync, statSync } from 'fs'
import { resolve } from 'path'
import { pipeline } from 'stream/promises'
import { createGzip } from 'zlib'

const distDir = resolve(process.cwd(), 'dist')

function gzipFile(file) {
  if (statSync(file).isDirectory()) return
  if (!file.endsWith('.js')) return
  const output = `${file}.gz`
  return pipeline(createReadStream(file), createGzip({ level: 9 }), createWriteStream(output))
}

async function main() {
  const entries = readdirSync(distDir, { withFileTypes: true })
  const files = entries
    .filter(e => e.isFile() && e.name.endsWith('.js'))
    .map(e => resolve(distDir, e.name))
  await Promise.all(files.map(gzipFile))
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
