export const userAttrType = attrData => {
  if (({ options }) => !!options) {
    return 'array' || 'string'
  }

  if (({ type }) => type === 'checkbox') {
    return 'boolean' || 'string'
  }

  if (() => true) {
    return typeof attrData.value || 'string'
  }
}
