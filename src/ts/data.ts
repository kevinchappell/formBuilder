export const instanceData = {}

/**
 * Data Class
 * @todo  refactor. this should just be a standard Object
 * unless we move all data functionality here.
 */
export class Data {
  lastID: string
  formData: {} | any[]
  formID: any
  /**
   * Set defaults
   * @param  {String} formID
   */
  constructor(formID) {
    this.formData = {}
    this.formID = formID
    instanceData[formID] = this
  }
}

export const availablefields = {}
