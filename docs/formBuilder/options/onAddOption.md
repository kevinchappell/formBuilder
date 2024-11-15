# onAddOption

transform the optionTemplate by return a modified template using the `onAddOption`

## Usage

```javascript
/**
 * Callback
 * @param optionTemplate Template for new option, expect to be modified if required and returned
 * @param {string} optionTemplate.label Option label
 * @param {string} optionTemplate.value Option value
 * @param {bool} optionTemplate.selected Mark option as selected
 * @param optionInfo Details about the option field
 * @param {string} optionInfo.type Control type
 * @param {string} optionInfo.index Index of new option 
 * @param {bool} optionTemplate.isMultiple Does the attribute have multiple selections allowed
 * @param {bool} optionTemplate.fieldName Name of the field these options are associated with.
 */
onAddOption: (optionTemplate, optionInfo)
```

```javascript
const options = {
  onAddOption: (optionTemplate, optionInfo) => {
    optionTemplate.label = `Option ${optionInfo.index + 1}`
    optionTemplate.value = `option-${optionInfo.index + 1}`
    return optionTemplate
  },
}
$(container).formBuilder(options)
```
## Example
To add additional data with specific options, for example, to use with business logic if selected, add additional properties to the optionTemplate object.

```javascript
const options = {
   onAddOption: (optionTemplate, optionInfo) => {
      optionTemplate.label = `Option ${optionInfo.index + 1}`
      optionTemplate.value = `option-${optionInfo.index + 1}`
      optionTemplate.minLevel = `min-level-${optionInfo.index + 1}`

      return optionTemplate
    }
}
$(container).formBuilder(options)
```
This will add an additional textbox for each option on the formbuilder for the user creating the form to enter.
