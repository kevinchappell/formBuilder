# Control architecture

Controls defined in this directory will be transpiled into the core `formBuilder` & `formRender` plugins. Only 'core' regularly used plugins should be included here. Plugins that have less common use-cases should be added as [control plugins](../control_plugins) which are only loaded as required. 

All control classes should inherit from `src/js/control.js`. Each class can support one or more `types` or `subtypes`.

Key steps to creating a new control:

  * `import {control} from '../control'`
  * define a new class extending `control` (or any other child control class)
  * define a static get definition class if you wish to have a custom icon, or any mi18n mappings. This is not always required - you can simply ensure that your types & subtypes have definitions in the mi18n translation file and by default your new control will use an the css class `icon-${type}`.
  * define a configure method if required - used to specify external javascript & css files and perform any additional configuration 
  * define a `build` method - this is always required. This method should use `this.config` to retrieve any required configuration and return a `DOMElement` representing the control
  * define a `onRender` method. Receives an `event` parameter, and is called when the `DOMElement` from `build` is inserted into the interface. This method is especially useful for controls that require javascript to render correctly - e.g. rich text editors.
  * call `control.register` to register your new control types.
    
## Loading external javascript & CSS

To load in external javascript & CSS set `this.js` or `this.css` as appropriate to a file, or an array of files. 

# Registering the new types & subtypes

Once you have created the class, you need to call the `control.register` method to register your new type. Call the method with two args:

  * `type` - the new type, or an array of new types that will use this class to render
  * `controlClass` - the name of the class you just created which will be bound to the specified types
  
To register new subtypes, call the `register` method with 3 args:

  * `type` - when the third parameter is specified (as it will be in this case), this arg is now specifying subtypes.
  * `controlClass` - as above
  * `parentType` - the parent type that these are subtypes to.

If your new class inherits from another child class, you should conform to the naming scheme <parentFile>.<thisClass>.js. E.g check out textarea.tinymce.js which extends the `controlTextarea` control class. In this situation, it is often easier to simply call the register method on the parent class - e.g. in this case `controlTextarea.register(subtypes, controlNewClass, 'textarea');` - however this makes no tangible difference aside from not having to import the `control` class.

## Examples

For an example just look at any of the controls in this directory.