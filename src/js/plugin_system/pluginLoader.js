import { registerPlugin } from './pluginRegistry.js';

const context = require.context('./plugins', false, /\.js$/);

context.keys().forEach(fileName => {
  const pluginModule = context(fileName).default;

  if (typeof pluginModule === 'function') {
    const pluginName = fileName
      .replace('./', '')
      .replace('.js', '');

    registerPlugin(pluginName, {
      type: 'control',
      plugin: pluginModule,
    });

    console.log(`Auto-registered plugin: ${pluginName}`);
  } else {
    console.warn(`Plugin ${fileName} does not export a default function.`);
  }
});
