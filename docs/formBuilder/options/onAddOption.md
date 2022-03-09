# onAddOption

transform the optionTemplate by return a modified template using the `onAddOption`

## Usage

```javascript
const options = {
  onAddOption: (optionTemplate, optionIndex) => {
    optionTemplate.label = `Option ${optionIndex + 1}`
    optionTemplate.value = `option-${optionIndex + 1}`
    return optionTemplate
  },
}
$(container).formBuilder(options)
```
## Example
To add additional data with specific options, for example, to use with business logic if selected, add additional properties to the optionTemplate object.

```javascript
const options = {
   onAddOption: (optionTemplate, optionIndex) => {
      optionTemplate.label = `Option ${optionIndex.index + 1}`
      optionTemplate.value = `option-${optionIndex.index + 1}`
      optionTemplate.minLevel = `min-level-${optionIndex.index + 1}`

      return optionTemplate
    }
}
$(container).formBuilder(options)
```
This will add an additional textbox for each option on the formbuilder for the user creating the form to enter.
