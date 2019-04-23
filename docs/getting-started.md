# Getting Started

## Download and install

formBuilder and formRender are available directly from [GitHub](https://github.com/kevinchappell/formBuilder/tree/master/dist) and through npm.

Install module from package manager:

```bash
$ npm i --save formBuilder
```

Once you have the module/plugin installed, include it in your build process for vendor dependencies, add to html via `<script>` tag, or `wp_enqueue_script` for a WordPress website.

## Basic Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Example formBuilder</title>
</head>
<body>
  <div id="fb-editor"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  <script src="https://formbuilder.online/assets/js/form-builder.min.js"></script>
  <script>
  jQuery(function($) {
    $(document.getElementById('fb-editor')).formBuilder();
  });
  </script>
</body>
</html>
```
