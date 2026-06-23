import { build } from 'vite'
import fs from 'fs'
import { resolve } from 'path'

const pluginsDir = resolve(process.cwd(), 'src/js/control_plugins')
const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'))

async function buildPlugin(file) {
  const name = file.replace(/\.js$/, '')
  process.env.PLUGIN_ENTRY = `dist/control_plugins/${name}`
  await build({ configFile: 'vite.config.plugins.js' })
}

async function main() {
  for (const file of files) {
    await buildPlugin(file)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
