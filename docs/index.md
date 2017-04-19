# jQuery formBuilder
Drag and drop form creation for your app.

<p data-height="570" data-theme-id="0" data-slug-hash="vLjOLL" data-default-tab="result" data-user="kevinchappell" class="codepen"></p>

## Introduction
jQuery formBuilder is a 100% client-side plugin that gives users the power to create forms using an intuitive drag and drop interface. FormBuilder supports a number of form fields and some html tags.

formRender is the companion plugin to formBuilder that lets you render the results of the created form. A typical use case would have formBuilder in an admin area of a site or app and formRender on the front-end. For this reason formRender and formBuilder are 2 separate plugins but can be used together to create an [edit toggle](http://codepen.io/kevinchappell/pen/obyeya).

### Features
* Customization - enable only the fields you need, use your own notifications append or prepend content and more.
* Bootstrap ready but not dependent
* [Translatable](http://codepen.io/kevinchappell/pen/PNZZmw)

## Project layout
```bash
    demo/             # Website for http://formbuilder.online
    dist/             # Compiled files for distribution
    docs/
        index.md      # The documentation homepage.
        ...           # Other markdown pages, images and other files.
    src/              # Source files for editing the plugin
    .fontello         # Fontello session token used for editing the icon font
    .gitignore
    .sass-lint.yml    # Config file for sass-lint to maintain css quality and style
    CHANGELOG.md
    CONTRIBUTING.md   # Contributor guidelines
    LICENSE
    README.md
    bower.json
    gulpfile.babel.js # Build process
    mkdocs.yml        # The configuration file.
    package.json      # Plugin config. Files in build process are stored in the `"config"` property.
```
