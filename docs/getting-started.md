# Getting Started

## Download and install
formBuilder and formRender are available directly from [GitHub](https://github.com/kevinchappell/formBuilder/tree/master/dist), Bower or NPM.
To install as a Bower component with:
```bash
$ bower install formBuilder
```

Once you have the JavaScript and stylesheet, include it in your build process for vendor dependencies, add to html, or `wp_enqueue_style` and `wp_enqueue_script` for a WordPress website.

## Basic Example
```html
<!DOCTYPE html>
<html>
<head>
<title>Example formBuilder</title>
<link rel="stylesheet" type="text/css" media="screen" href="http://formbuilder.online/assets/css/form-builder.min.css">
</head>
<body>
  <div id="fb-editor"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  <script src="http://formbuilder.online/assets/js/form-builder.min.js"></script>
  <script>
  jQuery(function($) {
    $(document.getElementById('fb-editor')).formBuilder();
  });
  </script>
</body>
</html>
```

