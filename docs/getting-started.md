# Getting Started

## Download and install

formBuilder and formRender are available directly from [GitHub](https://github.com/kevinchappell/formBuilder/tree/master/dist) and through npm.

Install module from package manager:

```bash
$ npm i --save formBuilder
```

Once you have the module/plugin installed, include it in your build process for vendor dependencies, add to html via `<script>` tag, or `wp_enqueue_script` for a WordPress website.

## Basic Example

**Note**: The document charset should be set to utf-8 to ensure CSS font styles are rendered correctly 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required meta tag -->
  <meta charset="utf-8">
  <title>Example formBuilder</title>
</head>
<body>
  <div id="fb-editor"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
  <script src="https://formbuilder.online/assets/js/form-builder.min.js"></script>
  <script>
  jQuery(function($) {
    $(document.getElementById('fb-editor')).formBuilder();
  });
  </script>
</body>
</html>
```
