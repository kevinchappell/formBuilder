/** A language: translation keys mapped to strings */
export type LanguageStrings = Record<string, string>

/** Languages keyed by locale, eg. `{ 'en-US': { hello: 'Hello' } }` */
export type Languages = Record<string, LanguageStrings>

/** Arguments for placeholder substitution: an object of named values or a single primitive for every token */
export type I18NArgs = Record<string, unknown> | string | number | boolean | null | undefined

/** Passed to `onMissing` when a key or a placeholder argument is missing */
export interface MissingInfo {
  /** translation key that was requested */
  key: string
  /** locale that was requested */
  locale: string
  /** `'key'` when the translation is missing, `'arg'` when a placeholder has no value */
  type: 'key' | 'arg'
  /** placeholder name, only set when `type` is `'arg'` */
  arg?: string
}

/** Return a string to use it in place of the missing key or argument */
export type OnMissingHandler = (info: MissingInfo) => string | void

export interface I18NOptions {
  /** extension of remote language files, default `'.lang'` */
  extension?: string
  /** local or remote directory containing language files, default `'assets/lang/'` */
  location?: string
  /** list of available locales, default `['en-US']` */
  langs?: string[]
  /** initial locale, defaults to the first of `langs` when falsy, default `'en-US'` */
  locale?: string | null
  /** languages available without fetching */
  preloaded?: Languages
  /** keys that take precedence over loaded and preloaded languages */
  override?: Languages
  /**
   * Locale(s) to fall back to when a key is missing. Lookup order: requested locale,
   * its base language if loaded (`pt-BR` → `pt`), then each fallback locale.
   * When set, empty string values count as present.
   */
  fallbackLocale?: string | string[]
  /** called for missing keys (in `get`/`t`) and missing placeholder arguments */
  onMissing?: OnMissingHandler
}

export interface I18NConfig extends I18NOptions {
  extension: string
  location: string
  langs: string[]
  override: Languages
}

export type TranslateFunction = (key: string, args?: I18NArgs) => string

export interface I18NInstance {
  config: I18NConfig
  /** loaded languages keyed by locale */
  langs: Languages
  /** locales that have been loaded */
  loaded: string[]
  /** current locale */
  locale: string
  /** current language, set by `setCurrent()` / `init()` */
  current?: LanguageStrings
  /** available locales */
  readonly getLangs: string[]

  /** parse and apply options, does not fetch */
  processConfig(options?: I18NOptions): void
  /** apply options and load the current (and fallback) locale */
  init(options?: I18NOptions): Promise<LanguageStrings>
  /** add a language from an object or `.lang` file contents */
  addLanguage(locale: string, lang?: LanguageStrings | string): void
  /** merge a language (and its overrides) into the loaded languages */
  applyLanguage(locale: string, lang?: LanguageStrings): LanguageStrings
  /** fetch a language file, cached unless `useCache` is false */
  loadLang(locale: string, useCache?: boolean): Promise<LanguageStrings>
  /** load a language if needed and make it current */
  setCurrent(locale?: string): Promise<LanguageStrings>

  /** translated string with placeholders replaced, or undefined when missing */
  get(key: string, args?: I18NArgs, locale?: string): string | undefined
  /** translated string with placeholders replaced, falls back to the key */
  t(key: string, args?: I18NArgs, locale?: string): string
  /** `t` bound to a locale */
  forLocale(locale: string): TranslateFunction
  /** raw string for a key, without placeholder replacement or plurals */
  getValue(key: string, locale?: string): string | undefined
  /** first loaded language containing the key */
  getFallbackValue(key: string): string | undefined
  /** plural form of a key (`key.zero`, `key.one`, `key.other`, ...) */
  getPluralValue(key: string, count: number, locale?: string): string | undefined
  /** configured fallback locales */
  getFallbackLocales(): string[]
  /** locales checked in order when `fallbackLocale` is configured */
  getLocaleChain(locale?: string): string[]
  /** set a string in the current language or the given locale */
  put(key: string, string: string, locale?: string): string
  /** RegExp matching a placeholder token literally */
  makeSafe(str: string): RegExp
  /** invoke `onMissing`, returns its string result */
  handleMissing(info: MissingInfo): string | undefined
}

export interface I18NConstructor {
  /** create a new instance */
  new (options?: I18NOptions): I18NInstance
  /** get the singleton instance, options are only used when it is first created */
  (options?: I18NOptions): I18NInstance
  readonly prototype: I18NInstance

  /** parse `.lang` file contents */
  processFile(text: string): LanguageStrings
  /** parse `.lang` file contents */
  fromFile(text: string): LanguageStrings
  /** parse `.lang` file contents, alias of `processFile` */
  parse(text: string): LanguageStrings
  /** get the singleton instance, options are only used when it is first created */
  getInstance(options?: I18NOptions): I18NInstance
  /** discard the singleton instance, the default export keeps its reference */
  resetInstance(): void
}

export declare const I18N: I18NConstructor
export type I18N = I18NInstance

/** singleton instance */
declare const i18n: I18NInstance
export default i18n
