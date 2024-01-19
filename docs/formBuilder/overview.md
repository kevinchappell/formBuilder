# Libraries and classes

Key files / folders:

  * `control.js` - defines the parent class for all controls and a bunch of class level methods for defining information about each control (label, icon etc)
  * `control/*.js` - the individual controls to form the base set of controls transpiled into the final codebase, each inheriting from `control.js`.
  * `control_plugins/*.js` - additional controls which also inherit from `control.js` that remain outside the transpiled code but are able to be individually included as required. 
  * `form-builder.js` - the library & code for the form builder interface
  * `form-render.js` - the library & code for rendering formData json/xml created by formbuilder
  * `helper.js` - reusable methods that are used throughout `form-builder.js`
  * `layout.js` - the layout engine that produces each row of the form, and determines how the label, help text, and control widget will each fit together.
  * `sanitizer.js` - Script injection and DOM clobbering protection library for formbuilder
  * `utils.js` - resuable methods thare are used in both `form-builder.js` and `form-render.js`
  
# Controls

 A 'control' in formbuilder parlance is a 'widget' or form input on the form. It allows the user to interact with the form.

 Each control is represented by a class which inherits from the `control` class defined in `control.js`. A control class may be used by multiple types of controls.
 
 For an example in of how to [**create a new control**](controls.md), check out the Readme.md in the `control/` directory. 
 
 For an example in of how to [**create a new control plugin**](control-plugins.md), check out the Readme.md in the `control/` directory.
 
 The parent class defined in `control.js` has two types of methods:
   * object level methods which are used to manipulate and create an instance of that control on a form
   * static class level methods which are used to define and interact with that type of control.
   
## Key class level methods
The following methods are static methods designed to be called on the class. E.g. `let controlClass = control.getClass(type);` 

  * `register` - one of the core methods defined by `control.js`. Any new control needs to register the `types` and `subtypes` it represents. See 'creating a new control' below for more details.
  * `getClass` - retrieve the registered `control` class for a specified `type`
  * `getRegistered` - used to retrieve an array of registered `types` (or `subtypes` of a specified `type`)
  * Child methods - these class level methods only rea lly make sense being called on individual child control classes. Those are grouped below. E.g. `let textLabel = control.getClass('text').label('text');`
    * `get definition` - child method - a getter method to define a static property for each `control` class. This method returns an object containing information about that types it represents, accessible through the `controlClass.definition` property. See '[Control definitions](#control-definitions)' below for more detail. 
    * `mi18n` - child method - a wrapper to the `mi18n` that retrieves the translation for a specified lookup key - but checks i18n overrides or mi18n lookup key mapping in the class definition. (See [Control definitions](#control-definitions) below for more details).
    * `label` - retrieves the label for a specified type
    * `active` - ensure the specified type is not defined as inactive
    * `icon` - retrieve the icon for this type
    
## Key object level methods - most of these (except `on` are designed to be defined for a child class)
  * `configure` - this method allows you to manipulate the configuration of the control after the constructor has done the standard configuration. Handy for defining `js` or `css` properties (string or array) to have external files preloaded once into the interface. 
  * `build` - the primary method for any control. Process the configuration in `this.config` and return a DOM element representing this control widget.
  * `onRender` - allows you to define code that will be executed when the element returned by `build` has been inserted into the interface - see any of the rich text editor controls for an example
  
## Control definitions
To define information about this control, `static get definition()` method will allow us to define information about this new class. The object returned by `get definition` getter method supports the following properties:

  * `mi18n` - this property allows you to map a lookup (generally the `type` or `subtype`) to a defined mi18n lookup. By default `form-builder` will look use the type or subtype to look up translations, but this property allows you to map those to different lookup keys. See `control/text.js` for an example.

  * `i18n` - used primarily by control plugins. This allows you to encapsulate the translations within the plugin itself. While best practice is to use the mi18n library, a control plugin will generally need to be self contained. If any translations cannot be found defined here, `control.js` will fall back to looking up the `mi18n` object.

```javascript
// option 1 - define multiple translations
i18n: {
  'fr-FR': {
    myType: 'Mon Type',
    mySubType: 'Mon sous-type'
  },
  'default': {
    myType: 'My Type',
    mySubType: 'My sub type'
  }
}

// option 2 - simpler approach to just define 1 translation (for the common situation where a class defines just 1 type or subtype)
i18n: {
  'fr-FR': 'Mon Type',
  'default': 'My Type'
}
```
    
  * `icon` - the icon to use in the list of controls for this `control`. If your control class supports multiple types, this should be defined as an object with the `type` being the key for each icon.
```javascript
// simple icon definition for a class that only supports 1 type (or uses the same icon for all types)
static get definition() {
  return {
    icon: '🌟',
    i18n: {
      default: 'Star Rating'
    }
  }
}
```
  * `inactive` - array of inactive types that shouldn't appear in formBuilder interface (but still be supported for rendering purposes) - see `control/select.js` for an example

  * `defaultAttrs` - used primarily by control plugins. This allows you to define custom attributes for the control plugin without needing to modify the formBuilder options. Follows the style of `typeUserAttrs` and can be overwritten as such. 
```javascript
static get definition() {
  return {
    defaultAttrs:{
        'Extra Content': {
            'label': 'extracontent', 
            'value' : '', 
            'type': 'textarea'
        }
    }
  }
}
```

* `disabledAttrs` - used primarily by control plugins. This allows you to disable default attrs for a control plugin where attributes are not used by the plugin or serve no purpose.
```javascript
static get definition() {
  return {
    disabledAttrs: [
      'description',
      'placeholder',
    ],
  }
}
```  

The label for a control in the list of form builder controls should be defined as the translation for the `type`. E.g. if you want to rename the label for a textarea, you would update the mi18n translation for `textarea`, or define an override in the `i18n` property.

# Layouts

The `layout` class controls how each 'row' for the form will be output. Each row of the form has a label, some optional help text, and a form control / widget. The layout class will stick these `DOMElements` together and wrap them in other appropriate DOMElements. It centralises the code to determining how these elements fit together and/or interact, and allows us to override this as necessary for a specific use case.

The default layout puts an help text into a '?' tooltip, and embeds this within the label, which is rendered inside a <label> tag. The label & control are then output inside a DIV with appropriate class names.

The layout class defines multiple `templates` which are used to render different types of controls. The primary predefined templates are  `default` (typical control), `noLabel` (controls only the control should be returned), or `hidden` where the 'naked' control should be output (with no wrapping divs). The `build` method of a `control` can indicate which template should be used to render that particular control. E.g. `control/hidden.js` defines the `hidden` template to be used. 

It is possible to override a layout template by passing an object of overriding `templates` to the constructor. Both `formBuilder.js` and `formRender.js` support an option `layoutTemplates` which achieves this. Each layout template should be a function that receives a variety of parameters (by default templates receive field, label, help and data). The last parameter for any template will be the object of data for this 'row' of the form.

For more control, it is possible to create a class that inherits from the `layout` class and pass this class as a `layout` option to `formBuilder` of `formRender`. 

## Customising main layouts
```javascript
layoutTemplates: {
  default: function(field, label, help, data) {
    help = $('<div/>')
      .addClass('helpme')
      .attr('id', 'row-' + data.id)
      .append(help);
    return $('<div/>').append(label, field, help);
  }
}
```

## Customising label & help layouts
```javascript
layoutTemplates: {
  help: function(helpText) {
    return $('<div/>')
      .addClass('help')
      .append(helpText);
  },
  label: function(label, data) {
    
    // cheeky styling
    return $('<label class="bright" style="margin-top:15px;"/>')
      .attr('for', data.id)
      .append(label);
  }
}
```

## Key methods

  * `constructor` - defines the default templates, merges in override templates, default configuration
  * `configure` - if you have defined a custom layout class this can be used to manipulate the object configuration post constructing
  * `build` - one of the primary methods that creates the control, label, help and then joins them using a template.
  * `label` - put together a label `DOMElement`
  * `help` - put together a help `DOMElement`
