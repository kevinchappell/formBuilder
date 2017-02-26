export const instanceData = {};

export class Data {
  constructor(formID) {
    this.formData = {};
    this.formID = formID;
    this.layout = '';
    instanceData[formID] = this;
  }
}

export const availablefields = {};
