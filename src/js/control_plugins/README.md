Control plugin architecture
===========

formBuilder can be easily extended to support new controls. Rather than have all controls load into the core formRender.js file, bloating it with controls that are rarely used, less used controls can be added as a plugin.

Using a plugin
============
Adding a plugin control into your project is as simple as including the file in a `<script>` tag in your page. Form data elements can now use this type & will be correctly rendered.

You should be able to easily determine what type (or subtype) is expected in your formData by the file naming scheme. `starRating.js` indicates a control of type `starRating`. Subtypes are delimited by a '`.`'. So `textarea.trymbowyg.js` has type `textarea`, subtype `trymbowyg`.

Example
-------
```html
<script src="dist/formRender.js"></script>
<script src="dist/control_plugins/starRating.js"></script>
<script type="text/javascript">
    $('.form-output').formRender({
      formData: `[
        {
         "type": "starRating",
         "label": "Rating",
         "name": "star-1492424082853"
        }
      ]`,
      dataType: 'json',
      render: true
    });
</script>
```

Creating a new control plugin
============
In general, to create a control in the formBuilder project, you will need to create a new class which inherits from the `control` class (as defined in `control.js`). When creating a plugin control, because this script will be executed in a different namespace, we need to instead define our new control in an array of functions to be run by the formRender class.

The `window.fbControls` property is used to store any plugin control anonymous functions. Your function will receive a `controlClass` argument which you can inherit from. It can also optionally receive an object containing all registered `control` children classes with their `type` as the object property/key, allowing you to create subtype classes which inherit from another control. Finally, your function should return the new class.

Compiling
-------

formBuilder is written in ES6, but compiled back down to ES5 to ensure maximum browser support. This adds a layer of complexity in adding plugin control classes.

At the time of writing there are issues in getting gulp to compile plugin classes correctly using babel, therefore this needs to be done manually. Thankfully it is a relatively simple process:

  * Write your new control in ES6, storing it in this directory as `yourClass.js`
  * Copy the entire contents of the file & paste in to https://babeljs.io/repl/.
  * Copy the transpiled contents and save into a new file in this directory named `yourClass.es5.js`
  * Done!

New plugin example
-------
`src/js/control_plugins/starRating.js`
```javascript
// configure the class for runtime loading
if (!window.fbControls) window.fbControls = new Array();
window.fbControls.push(function (controlClass) {

  /**
   * Star rating class
   */
  class controlStarRating extends controlClass {

    configure() {
      this.js = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.js';
      this.css = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.css';
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return DOM Element to be injected into the form.
     */
    build() {
      this.dom = this.markup('span', null, {id: this.config.name});
      return this.dom;
    }

    onRender() {
      const rating = this.config.value || 3.6;
      $(this.dom).rateYo({rating});
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('starRating', controlStarRating);
  return controlRating;
});
```

Transpiled example
---------
`src/js/control_plugins/starRating.es5.js`
```javascript
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!window.fbControls) window.fbControls = new Array();
window.fbControls.push(function (controlClass) {

  /**
   * Starz rating class
   */
  var controlStarRating = function (_controlClass) {
    _inherits(controlStarRating, _controlClass);

    function controlStarRating() {
      _classCallCheck(this, controlStarRating);

      return _possibleConstructorReturn(this, (controlStarRating.__proto__ || Object.getPrototypeOf(controlStarRating)).apply(this, arguments));
    }

    _createClass(controlStarRating, [{
      key: 'configure',
      value: function configure() {
        this.js = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.js';
        this.css = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.css';
      }

      /**
       * build a text DOM element, supporting other jquery text form-control's
       * @return DOM Element to be injected into the form.
       */

    }, {
      key: 'build',
      value: function build() {
        return this.markup('span', null, { id: this.config.name });
      }
    }, {
      key: 'onRender',
      value: function onRender() {
        var value = this.config.value || 3.6;
        $('#' + this.config.name).rateYo({ rating: value });
      }
    }]);

    return controlStarRating;
  }(controlClass);

  // register this control for the following types & text subtypes


  controlClass.register('starRating', controlStarRating);
  return controlStarRating;
});

```
