declare module 'mi18n' {
  function mi18n(): void
  export function init(args?: any): any
  export function get(arg1?: any, arg2?: any): any
  export function setCurrent(args?: any): any

  export let current: any
  export let locale: any

  export = mi18n
}
