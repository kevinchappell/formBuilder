# i18n ![NPM Version](https://img.shields.io/npm/v/@draggable/i18n)

Add multi-lingual support to any JavaScript app or module with this light-weight package. Used by [Formeo](https://formeo.io).

### Features:

- Isomorphic/Universal: works in the browser and in Node (no `fetch` needed when languages are preloaded)
- easy translation of static text files
  - benefits: anyone can translate, no more xliff
  - reduced margin of error.
- Variable support
- Fallback locales and plurals
- TypeScript types included
- Dependency free
- Fast

## Install

```sh
npm install @draggable/i18n
```

## Usage

The default export is a shared singleton instance, `I18N` is the class.

```javascript
import i18n, { I18N } from '@draggable/i18n'

const i18nOptions = {
  extension: '.lang', // extension used by your language files, defaults to ".lang"
  location: 'https://location.of/language/files/', // absolute or relative url to language files
  langs: [
    // locales you would like to be active
    'en-US',
    'pt-BR',
    'de-DE', // will attempt to load `https://location.of/language/files/de-DE.lang` with current config
  ],
  locale: 'en-US', // default locale
  override: {
    'en-US': {
      autocomplete: 'Autofinish', // override individual keys or provide entire language definition
    },
  },
}

// configure the singleton and load the current locale
await i18n.init(i18nOptions)

// or create a separate instance
const myI18n = new I18N(i18nOptions)
await myI18n.init()
```

`I18N(options)` (without `new`) returns the singleton, the same instance as the default export. Options passed this way are
only used if the singleton has not been created yet; use `i18n.init(options)` to reconfigure it.

... then in your app

```jsx
<label>{i18n.get('addOption')}</label>
```

### Options

| Option           | Type                                       | Default          | Description                                                                         |
| ---------------- | ------------------------------------------ | ---------------- | ----------------------------------------------------------------------------------- |
| `extension`      | `string`                                   | `'.lang'`        | extension of remote language files                                                  |
| `location`       | `string`                                   | `'assets/lang/'` | url or path of the directory containing language files                              |
| `langs`          | `string[]`                                 | `['en-US']`      | available locales, handy for populating a language selector                         |
| `locale`         | `string`                                   | `'en-US'`        | initial locale, falls back to the first of `langs` when empty                       |
| `preloaded`      | `{ [locale]: { [key]: string } }`          | `{}`             | languages available without fetching                                               |
| `override`       | `{ [locale]: { [key]: string } }`          | `{}`             | keys that take precedence over loaded and preloaded languages                       |
| `fallbackLocale` | `string \| string[]`                       | –                | locale(s) to fall back to when a key is missing, see [Fallback locales](#fallback-locales) |
| `onMissing`      | `(info) => string \| void`                 | –                | called for missing keys and arguments, see [Missing keys](#missing-keys-and-arguments) |

### Translating

```javascript
// languages: { 'en-US': { greeting: 'Hello {name}', total: '{count} of {count}' } }

i18n.get('greeting', { name: 'Ana' }) // 'Hello Ana'
i18n.get('total', 3) // '3 of 3', a primitive replaces every placeholder
i18n.get('greeting') // 'Hello {name}', no args: no replacement
i18n.get('missing') // undefined

// t() always returns a string, falling back to the key
i18n.t('greeting', { name: 'Ana' }) // 'Hello Ana'
i18n.t('missing') // 'missing'

// per-call locale, without changing the current locale
i18n.get('greeting', { name: 'Ana' }, 'de-DE') // 'Hallo Ana'
i18n.t('greeting', { name: 'Ana' }, 'de-DE') // 'Hallo Ana'
i18n.getValue('greeting', 'de-DE') // 'Hallo {name}', raw string

// t() bound to a locale, handy on servers handling several locales at once
const t = i18n.forLocale('de-DE')
t('greeting', { name: 'Ana' }) // 'Hallo Ana'
```

Missing placeholder arguments are replaced with an empty string.

### Fallback locales

Without `fallbackLocale` a missing key is looked up in any loaded language that has it (legacy behaviour).
With `fallbackLocale` set the lookup order is:

1. the requested locale, eg. `pt-BR`
2. its base language, if loaded, eg. `pt`
3. each fallback locale, in order
4. `t()` returns the key, `get()` returns `undefined`

```javascript
const i18n = new I18N({
  locale: 'pt-BR',
  fallbackLocale: ['pt', 'en'],
  preloaded: {
    'pt-BR': { save: 'Salvar' },
    pt: { cancel: 'Cancelar' },
    en: { save: 'Save', cancel: 'Cancel', help: 'Help' },
  },
})

i18n.t('save') // 'Salvar'
i18n.t('cancel') // 'Cancelar'
i18n.t('help') // 'Help'
i18n.getLocaleChain('pt-BR') // ['pt-BR', 'pt', 'en']
```

When `fallbackLocale` is set, keys whose value is an empty string (`''`) count as translated and are returned as `''`
instead of falling back. Without it, empty strings are treated as missing.

`init()` also loads fallback locales that are not loaded yet.

### Plurals

When a key is missing and `args` is a number or has a numeric `count`, plural forms of the key are used.
The form is chosen with [`Intl.PluralRules`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) for the locale:
`key.zero` (only for a count of `0`), then `key.<category>` (`zero`, `one`, `two`, `few`, `many`, `other`), then `key.other`.
`{count}` and other placeholders are replaced as usual. If `Intl.PluralRules` is not available, `1` is `one` and anything else is `other`.

```txt
items.zero = No items
items.one = {count} item
items.other = {count} items
files.other = {count} files in {folder}
```

```javascript
i18n.t('items', 0) // 'No items'
i18n.t('items', { count: 1 }) // '1 item'
i18n.t('items', 5) // '5 items'
i18n.t('files', { count: 2, folder: 'docs' }) // '2 files in docs'
```

A key that exists as-is (eg. `items`) always takes precedence over its plural forms.

### Missing keys and arguments

```javascript
const i18n = new I18N({
  onMissing: ({ key, locale, type, arg }) => {
    console.warn(`missing ${type}`, locale, key, arg)
    if (type === 'key') return `[${key}]` // optional replacement
  },
})
```

`onMissing` is called by `get()` and `t()` for missing keys (`type: 'key'`) and for missing placeholder values
(`type: 'arg'`, with `arg` set to the placeholder name). Returning a string uses it instead; returning nothing keeps the
default (`undefined` from `get()`, the key from `t()`, `''` for arguments).

### Add a Language after initialization

```javascript
i18n.addLanguage('fr-FR', {
  addOption: 'Ajouter une option',
})

// or from the contents of a .lang file
i18n.addLanguage('fr-FR', 'addOption = Ajouter une option')
```

Adding the same locale again merges the keys; `getLangs` and `loaded` do not get duplicates.

### Put a string

```javascript
i18n.put('greeting', 'Hi {name}') // current language
i18n.put('greeting', 'Oi {name}', 'pt-BR') // a specific locale
```

### Change language

```javascript
await i18n.setCurrent('de-DE') // fetches de-DE.lang unless already loaded or preloaded
```

### Process a config

```javascript
i18n.processConfig({ locale: 'de-DE', override: { 'de-DE': { save: 'Speichern' } } })
```

`processConfig(options)` applies options without fetching anything; `init(options)` applies them and loads the current
locale.

### Server-side usage

No `fetch` is needed when languages are preloaded or added from strings:

```javascript
import { readFileSync } from 'node:fs'
import { I18N } from '@draggable/i18n'

const i18n = new I18N({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  preloaded: {
    'en-US': I18N.parse(readFileSync('lang/en-US.lang', 'utf8')),
  },
})
i18n.addLanguage('de-DE', readFileSync('lang/de-DE.lang', 'utf8'))

// per request
const t = i18n.forLocale(request.locale)
t('greeting', { name: user.name })
```

`setCurrent()` and `init()` do not fetch locales that are preloaded or added with `addLanguage()`.
CommonJS is supported as well: `const { I18N } = require('@draggable/i18n')`.

### TypeScript

Types are included:

```typescript
import i18n, { I18N, type I18NOptions, type I18NInstance } from '@draggable/i18n'

const options: I18NOptions = { locale: 'en-US', fallbackLocale: 'en-US' }
const instance: I18NInstance = new I18N(options)
const label: string = instance.t('addOption')
```

### `.lang` files

```txt
# comments start with # or ; at the beginning of a line
de-DE = Deutsch
en-US = German

addOption = Option hinzufügen
allFieldsRemoved = Alle Felder wurden entfernt.
allowMultipleFiles = Upload mehrerer Dateien erlauben
autocomplete = Autovervollständigung

; a trailing backslash continues the value on the next line,
; leading whitespace of the next line is ignored
longText = Dies ist ein langer Text, \
    der über mehrere Zeilen geht.
```

- one `key = value` per line, keys and values are trimmed
- `\n` and `\r\n` line endings are supported, blank lines are ignored
- `#` or `;` only start a comment at the beginning of a line (after optional whitespace), not after a value
- a single trailing `\` joins the next line, `\\` at the end of a line is kept as-is

Parse file contents with `I18N.parse(text)` (alias of `I18N.processFile(text)`).
