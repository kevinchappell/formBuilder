# formBuilder

[![npm version](https://badge.fury.io/js/formBuilder.svg)](https://www.jsdelivr.com/package/npm/formBuilder) [![License: MIT](https://img.shields.io/npm/l/formBuilder.svg)](LICENSE)

A jQuery plugin for building forms with drag and drop, plus a companion plugin to render them.

- **formBuilder** is a client-side drag-and-drop form editor. Users drag fields (text, textarea, select, checkbox and radio groups, date, number, file, autocomplete, button, header, paragraph, hidden and more) onto a stage, then edit each field's label, name, options and other attributes. The form definition is exported as JSON (default) or XML `formData`.
- **formRender** takes that `formData` and renders it as a working HTML form. It can also read back what a user entered (`userData`) or prefill values.

A common setup is formBuilder in an admin area and formRender on the public side.

[![formBuilder editor](https://cloud.githubusercontent.com/assets/1457540/16901016/d415f75c-4c2e-11e6-8687-a84c9822162d.png)](https://formbuilder.online/)

## Demos

- [Editor demo](https://formbuilder.online/)
- [API demo](https://kevinchappell.github.io/formBuilder/)
- Docs demos: [formBuilder basic](https://formbuilder.online/docs/formBuilder/demos/basic/), [formRender basic](https://formbuilder.online/docs/formRender/demos/basic/)

## Installation

### npm / yarn

```bash
npm install formBuilder
# or
yarn add formBuilder
```

The package name is case-sensitive: `formBuilder`. The built files are in `dist/` (`form-builder.min.js`, `form-render.min.js`).

### CDN (jsDelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/formBuilder@3.23.3/dist/form-builder.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/formBuilder@3.23.3/dist/form-render.min.js"></script>
```

### Dependencies

- **jQuery** (`>=3.4.1`), required by both plugins. The `dist` files use the global `jQuery`, so load jQuery first. If you use a bundler, expose `window.jQuery` before you import formBuilder.
- **jQuery UI Sortable**, required by formBuilder for drag and drop. You can use the [`jquery-ui-sortable`](https://www.jsdelivr.com/package/npm/jquery-ui-sortable) package or a full jQuery UI build.

CSS is injected by the scripts, so you don't need a separate stylesheet.

## Quick start

### formBuilder

```html
<meta charset="utf-8">
<div id="fb-editor"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/formBuilder@3.23.3/dist/form-builder.min.js"></script>
<script>
  jQuery(($) => {
    const fbPromise = $('#fb-editor').formBuilder({
      disableFields: ['autocomplete'],
      onSave: (evt, formData) => console.log(formData),
    }).promise

    fbPromise.then((formBuilder) => {
      const json = formBuilder.actions.getData('json') // 'js' (default), 'json' or 'xml'
      console.log(json)
    })
  })
</script>
```

formBuilder starts up asynchronously, so `actions` aren't ready the moment you call `.formBuilder()`. Wait on the [`promise`](https://formbuilder.online/docs/formBuilder/promise/) property, or call actions later, for example from a click handler.

### formRender

```html
<div id="fb-render"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/formBuilder@3.23.3/dist/form-render.min.js"></script>
<script>
  jQuery(($) => {
    const formData = '[{"type":"text","label":"Full Name","name":"full-name","subtype":"text"}]'
    const renderer = $('#fb-render').formRender({ formData })

    // later, read what the user entered
    console.log(renderer.userData)
  })
</script>
```

`formData` can be a JSON string or the array returned by `getData()`. To use XML, pass `dataType: 'xml'`.

## Documentation

Full docs: **https://formbuilder.online/docs/** · [Getting started](https://formbuilder.online/docs/getting-started/) · [formBuilder overview](https://formbuilder.online/docs/formBuilder/overview/)

**Common formBuilder options:** [formData](https://formbuilder.online/docs/formBuilder/options/formData/), [disableFields](https://formbuilder.online/docs/formBuilder/options/disableFields/), [i18n](https://formbuilder.online/docs/formBuilder/options/i18n/), [onSave](https://formbuilder.online/docs/formBuilder/options/onSave/), [typeUserAttrs](https://formbuilder.online/docs/formBuilder/options/typeUserAttrs/)

**Common formBuilder actions:** [getData](https://formbuilder.online/docs/formBuilder/actions/getData/), [setData](https://formbuilder.online/docs/formBuilder/actions/setData/), [addField](https://formbuilder.online/docs/formBuilder/actions/addField/), [save](https://formbuilder.online/docs/formBuilder/actions/save/), [setLang](https://formbuilder.online/docs/formBuilder/actions/setLang/)

**Custom fields:** [Controls](https://formbuilder.online/docs/formBuilder/controls/) · [Control plugins](https://formbuilder.online/docs/formBuilder/control-plugins/)

**formRender:** [Options](https://formbuilder.online/docs/formRender/options/) · [userData](https://formbuilder.online/docs/formRender/actions/userData/)

## Translations (i18n)

Translations are handled by [`@draggable/i18n`](https://github.com/draggable/i18n). The language files come from [formBuilder-languages](https://github.com/kevinchappell/formBuilder-languages). `en-US` is bundled. Other locales are fetched as `<location><locale>.lang`, and `location` defaults to the relative path `assets/lang/`. Set the [`i18n` option](https://formbuilder.online/docs/formBuilder/options/i18n/) to choose a locale and where its file is loaded from:

```javascript
$('#fb-editor').formBuilder({
  i18n: {
    locale: 'de-DE',
    location: 'https://cdn.jsdelivr.net/npm/formbuilder-languages@1.2.2/',
  },
})
```

### Translators welcome!

As more people use formBuilder, it needs to be available in more languages. New languages and fixes to existing ones are always welcome. See [Contributing Languages](https://github.com/kevinchappell/formBuilder-languages/blob/master/CONTRIBUTING.md) for how to help.

## Browser support

The build targets the [browserslist `defaults`](https://browsersl.ist/#q=defaults) query, which covers current versions of the major browsers:

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
| :---: | :---: | :---: | :---: | :---: |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

Internet Explorer is not supported.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) and the [development docs](https://formbuilder.online/docs/development/) ([contributing guide on the site](https://formbuilder.online/docs/contributing/)).

```bash
git clone https://github.com/kevinchappell/formBuilder.git
cd formBuilder
npm ci
npm start          # local demo with Vite (alias: npm run dev)
npm test           # Vitest with coverage
npm run lint       # ESLint on ./src
npm run build      # build dist/ (form-builder + form-render, minified and unminified)
npm run build:all  # plugins, vendor, build and copy to the demo
```

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) and are checked by commitlint. [semantic-release](https://github.com/semantic-release/semantic-release) uses them to publish releases from `master`.

## Support

Report bugs and request features on [GitHub Issues](https://github.com/kevinchappell/formBuilder/issues). Include your formBuilder version, the options you used, your browser and steps to reproduce.

## Related

- [Changelog](https://github.com/kevinchappell/formBuilder/blob/master/CHANGELOG.md)
- [Ng2FormBuilder](https://github.com/KhaledSMQ/Ng2FormBuilder), a community Angular 2/4 version

## License

[MIT](LICENSE)
