# Bootstrap Grid Support

Render fields using the <a target="_new" href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap Grid System</a>

This is done via class attributes set on the formBuilder elements

Setup:
<ol>
<li>Add a row identifier onto the class i.e row-1</li>
<li>Add the bootstrap grid columns i.e col-xs-6</li>
</ol>

<p>&bull; Text fields that take an equal row width</p>

```javascript
[
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-1 col-md-6",
    "name": "text-1542414959043",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-1 col-md-6",
    "name": "text-1542414971569",
    "subtype": "text"
  }
]
```
or

```javascript
[
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-1 col-md-6",
    "name": "text-1542414959043",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-1 col-md-6",
    "name": "text-1542414971569",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-2 col-md-1",
    "name": "text-1542415125366",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-2 col-md-1",
    "name": "text-1542415491216",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-2 col-md-1",
    "name": "text-1542415492113",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-2 col-md-1",
    "name": "text-1542415493337",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-2 col-md-1",
    "name": "text-1542415494147",
    "subtype": "text"
  },
  {
    "type": "text",
    "label": "Text Field",
    "className": "form-control row-2 col-md-1",
    "name": "text-1542415490221",
    "subtype": "text"
  }
]
```
