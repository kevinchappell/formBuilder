import mi18n from '@draggable/i18n'

/**
 * Language file loading for formBuilder and formRender.
 *
 * `@draggable/i18n` treats a locale as loaded once it has any strings, eg. the built in en-US strings added in
 * config.js or the keys from an `i18n.override`, and then never fetches `${location}${locale}${extension}`.
 * mi18n, which formBuilder used before, still fetched the file and merged it under the overrides. These helpers
 * keep that behaviour so existing `i18n` options load the same strings: each language file is fetched once,
 * a failed fetch keeps the strings already available.
 */
const requests = new Map()

const loadLangFile = locale => {
  const { location, extension } = mi18n.config
  const url = `${location}${locale}${extension}`
  if (!requests.has(url)) {
    requests.set(url, mi18n.loadLang(locale, false))
  }
  return requests.get(url)
}

/**
 * Load the language file for a locale (once) and make it the current language
 * @param {string} locale
 * @return {Promise<Object>} current language strings
 */
export const setLocale = async (locale = 'en-US') => {
  await loadLangFile(locale)
  return mi18n.setCurrent(locale)
}

/**
 * Apply `i18n` options and load the current locale
 * @param {Object} options locale, location, extension, override
 * @return {Promise<Object>} current language strings
 */
export const initI18n = options => {
  mi18n.processConfig({ ...mi18n.config, ...options })
  return setLocale(mi18n.locale)
}
