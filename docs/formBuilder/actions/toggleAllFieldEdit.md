# Actions -> toggleAllFieldEdit

Programmatically toggle all field edit panels on the stage

## Usage

```javascript
const fbEditor = document.getElementById('build-wrap')
const formData = JSON.stringify([
  {
    type: 'header',
    subtype: 'h1',
    label: 'Header',
  },
  {
    type: 'paragraph',
    subtype: 'p',
    label: 'Lots of text goes here',
  },
])
const formBuilder = $(fbEditor).formBuilder({formData})

// Can be used 2 different ways
formBuilder.actions.toggleAllFieldEdit() // first
$(fbEditor).formBuilder('toggleAllFieldEdit') // second
```
