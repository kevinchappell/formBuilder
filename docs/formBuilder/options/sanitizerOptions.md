# SanitizerOptions
`sanitizerOptions` provides the configuration of the built-in script injection, DOM Clobbering and Form hijacking protection.

This protection is disabled by default, however should be enabled when any of the following apply:
- Input into fields may be copy/pasted from untrusted sources (especially Label field or paragraph Content field)
- Untrusted users may build forms

In a future version of FormBuilder protections may be enabled by default.

_Script injection_ protection will remove `<script>` elements, inline javascript, and on* event attributes from FormElements when rendering the FormBuilder previews and FormRender forms. Additionally invalid or incomplete HTML will be cleaned up.

_DOM Clobbering_ protection will remove _id_ and _name_ attribute values which cause attributes in the Document and Form DOM objects to be overwritten.

_Form Protection_ will ensure than buttons cannot override the form action nor act upon another form.

## Enabling protections
```javascript
const sanitizerOptions = {
  clobberingProtection: {
    document: true,
    form: false, //Set true for FormRender
  },
  backendOrder: ['dompurify','sanitizer','fallback'],
};
$(container).formBuilder(options);
```

## Sanitizer backends

FormBuilder supports three Sanitizer backends:
- DomPurify
- Sanitizer API
- jQuery based fallback

### DomPurify
To enable support for the DomPurify backend the Javascript library should be included before FormBuilder is included on your page.

Information on installing DomPurify can be found on the project page https://github.com/cure53/DOMPurify

### Sanitizer API
Sanitizer API is an experimental web feature being implemented by the major web browsers. The Sanitizer backend will use this API if it is detected in the browser.

### jQuery based fallback
A built-in fallback method is provided when DomPurify an Sanitizer API is not enabled or available.

## DOM Clobbering
DOM clobbering prevention can be enabled to protect the attributes of the global document dom element and any wrapping `<form>` element.

Optionally instead of removing offending _id_ or _name_ attributes the Dom Clobbering protection can be configured to prepend the namespace 'user-content-' (Similar to DomPurify SANITIZE_NAMED_PROPS)

```javascript
const sanitizerOptions = {
  clobberingProtection: {
    document: true,
    form: false, //Set true for FormRender
    namespaceAttributes: true,
  },
  backendOrder: ['dompurify','sanitizer','fallback'],
};
$(container).formBuilder(options);
```
