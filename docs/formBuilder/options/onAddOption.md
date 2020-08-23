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
