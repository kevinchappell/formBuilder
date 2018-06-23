export const instanceData = {}

/**
 * Data Class
 * @todo  refactor. this should just be a standard Object
 * unless we move all data functionality here.
 */
export class Data {
  /**
   * Set defaults
   * @param  {String} formID
   */
  constructor(formID) {
    this.formData = {}
    this.formID = formID
    this.layout = ''
    instanceData[formID] = this
  }
}

export const availablefields = {}
