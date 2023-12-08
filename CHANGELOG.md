## [3.17.3](https://github.com/kevinchappell/formBuilder/compare/v3.17.2...v3.17.3) (2023-12-08)


### Bug Fixes

* Only setup sortable row wrapper and invisible row placeholders when adding a row to the stage ([25a27e6](https://github.com/kevinchappell/formBuilder/commit/25a27e6ced109bbfc745dace16175f80a00b40b1))
* Use last-of-type instead of last-child due to drag/drop placeholder occupying last-child position ([dc4f312](https://github.com/kevinchappell/formBuilder/commit/dc4f3128372076bba4056f89d22160fd83f8a949))
* Use the pointer to for sortable intersect detection when dragging controls from the control panel onto a bootstrap row. jQuery.ui sortable used tolerance: intersect which caused the placeholder in a row to jump around when near the edges and the new control is less than 50% contained. ([995fc2e](https://github.com/kevinchappell/formBuilder/commit/995fc2e5ac75b146b4565d3eb24c08c39d45a3f6))
* When adding rows, reset the hidden flag for all placeholders ([939341c](https://github.com/kevinchappell/formBuilder/commit/939341ce9c4aff39183527202fbe7fb643b3bb9f))

## [3.17.2](https://github.com/kevinchappell/formBuilder/compare/v3.17.1...v3.17.2) (2023-12-08)


### Bug Fixes

* For TextArea control have made the value input a textarea and not a single input[type=text] value. Formatting of TextAreas is now preserved. ([0b64d37](https://github.com/kevinchappell/formBuilder/commit/0b64d37c62ad44966817db3371b4e75f3da9da40))
* For TextArea control have made the value input a textarea and not a single input[type=text] value. Formatting of TextAreas is now preserved. ([8da4cb5](https://github.com/kevinchappell/formBuilder/commit/8da4cb54a08f5ea5386c3f9b7565cd20b20b4b33))

## [3.17.1](https://github.com/kevinchappell/formBuilder/compare/v3.17.0...v3.17.1) (2023-12-08)


### Bug Fixes

* Ensure subtype attribute is hidden when disabled via disableAttr ([4572fe6](https://github.com/kevinchappell/formBuilder/commit/4572fe6ad9230dd57a8dd488e72e19612c0016c4))

# [3.17.0](https://github.com/kevinchappell/formBuilder/compare/v3.16.13...v3.17.0) (2023-11-07)


### Bug Fixes

* add additional row cleanup check to ensure no artifacts are left in the DOM ([612d009](https://github.com/kevinchappell/formBuilder/commit/612d0093217fe98b0f1f79f74afecb977e3b724f))
* If label is intentionally blank or label is not enabled we fallback to 'type: name' for the control label to ensure a value is visible on the stage ([fcff9e9](https://github.com/kevinchappell/formBuilder/commit/fcff9e94e6b88b2f146c55f2c4abab09fb53406f))
* remove bootstrap initialisation of blank row on empty form. It is not required. ([b8fd49a](https://github.com/kevinchappell/formBuilder/commit/b8fd49af02905dafeb95b025072d870f9e59168d))
* remove redundant checkRowCleanup() ([9b27a6e](https://github.com/kevinchappell/formBuilder/commit/9b27a6e2dcf1871d98da3454e8e3cb5ee6888a54))
* remove redundant droppingToPlaceholderRow which uses the same check as droppingToNewRow, and simplify the logic. ([62c0562](https://github.com/kevinchappell/formBuilder/commit/62c0562e18751f653470c5317c53cd395edf6016))


### Features

* store the bootstrap row's id to the rowWapper via data-row-id ([dd68b52](https://github.com/kevinchappell/formBuilder/commit/dd68b52e5ac9521c4b78aab5bb04e07c08651241))

## [3.16.13](https://github.com/kevinchappell/formBuilder/compare/v3.16.12...v3.16.13) (2023-11-07)


### Bug Fixes

* ensure that controlConfig is loaded per formBuilder instance. We delay setting the static property controlConfig on class control until we construct the control class in layout. ([5f8de00](https://github.com/kevinchappell/formBuilder/commit/5f8de00ee6c546edf1fdb663b534b676d5dca0dd))

## [3.16.12](https://github.com/kevinchappell/formBuilder/compare/v3.16.11...v3.16.12) (2023-11-01)


### Bug Fixes

* ensure a default value is set for when rows exists but none have numerical indices ([e963748](https://github.com/kevinchappell/formBuilder/commit/e96374833e549c6ca9bfc9acd90d225939b25f3e))

## [3.16.11](https://github.com/kevinchappell/formBuilder/compare/v3.16.10...v3.16.11) (2023-11-01)


### Bug Fixes

* For input[type=checkbox], no selection should result in an empty userData otherwise there is no ability to save state when default selected checkboxes are all unchecked ([2744a68](https://github.com/kevinchappell/formBuilder/commit/2744a6840a47771486fbdfd3bd05ea0432bfa2f6))

## [3.16.10](https://github.com/kevinchappell/formBuilder/compare/v3.16.9...v3.16.10) (2023-10-31)


### Bug Fixes

* set the preview property for custom controls ([de67461](https://github.com/kevinchappell/formBuilder/commit/de6746102004cbfbd57b18857c56ae9d9dff4379))

## [3.16.9](https://github.com/kevinchappell/formBuilder/compare/v3.16.8...v3.16.9) (2023-10-31)


### Bug Fixes

* Add test cases for checkbox group ([36c7d0e](https://github.com/kevinchappell/formBuilder/commit/36c7d0e62484de4b0d3d340ecf4809354dad3825))
* Don't pull grid classes from SVG elements, The SVG className property is a SVGAnimatedString not a string. Controls like textarea.quill have SVG graphics in their element list. ([db27e06](https://github.com/kevinchappell/formBuilder/commit/db27e067c849bceb40e60da6acdf8b395ab8f0eb))
* prevent togging the edit field if double-clicking within a textarea. Additionally, use the property isContentEditable to check if the element double-clicked is a descendant of a contenteditable field (eg a paragraph withing a div[contenteditable]) ([a44ef6e](https://github.com/kevinchappell/formBuilder/commit/a44ef6e77d4f7d4001083a9228fa961af0b22333))
* strip form-control from the quill container div if it is set, this class is incompatible with the quill control ([533ae80](https://github.com/kevinchappell/formBuilder/commit/533ae8020cbdc07689fc2f8129562d844526a0ef))
* use the correct selector for the checkbox-group other value input, control may not have been added to the document dom at the time of onRender. ([0768868](https://github.com/kevinchappell/formBuilder/commit/0768868be4b90964d31c9eab13e5b975621559c2))

## [3.16.8](https://github.com/kevinchappell/formBuilder/compare/v3.16.7...v3.16.8) (2023-10-31)


### Bug Fixes

* When setting a placeholder option a select field set the value to an empty string '' to allow for required validation to occur ([924ca5c](https://github.com/kevinchappell/formBuilder/commit/924ca5ca32576ef4b9fef68df4d8eba335ec7b50))

## [3.16.7](https://github.com/kevinchappell/formBuilder/compare/v3.16.6...v3.16.7) (2023-10-30)


### Bug Fixes

* convert raw HTML strings received from control.build() into HTMLElement(s) to ensure processClassName() can strip bootstrap classes ([03e657f](https://github.com/kevinchappell/formBuilder/commit/03e657f6d90cf58ab63d340258f1a4aa7b08c30f))

## [3.16.6](https://github.com/kevinchappell/formBuilder/compare/v3.16.5...v3.16.6) (2023-10-30)


### Bug Fixes

* allow Bootstrap row identifiers to be any string value after row- (eg row-myrow). This allows default fields or inputSets to be pre-configured with named rows which can then be targeted with CSS rules. ([e06f85d](https://github.com/kevinchappell/formBuilder/commit/e06f85d350fbd1fc0d1873551e4bf16b5d24f495))

## [3.16.5](https://github.com/kevinchappell/formBuilder/compare/v3.16.4...v3.16.5) (2023-10-23)


### Bug Fixes

* define icon() on templateControl ([9364525](https://github.com/kevinchappell/formBuilder/commit/93645250bd1998e625a9cd637c4fbd6f82f3e83b))

## [3.16.4](https://github.com/kevinchappell/formBuilder/compare/v3.16.3...v3.16.4) (2023-10-19)


### Bug Fixes

* Refactor initialisation of the formBuilder plugin to ensure that two or more concurrent initialisations cannot interfere with each other ([199c1cd](https://github.com/kevinchappell/formBuilder/commit/199c1cd2601594b84c305c17a0c62fb81e51d9d4))
* subtype is critical to defining the control, add subtype to the list of attributes that are hidden rather than removed when disabled via disabledAttrs ([28208fa](https://github.com/kevinchappell/formBuilder/commit/28208faefa7ba06a755118842652517ba7ee8ac5))

## [3.16.3](https://github.com/kevinchappell/formBuilder/compare/v3.16.2...v3.16.3) (2023-10-19)


### Bug Fixes

* Configure JSDOM to load script tags injected into the dom by getScripts ([41c0b20](https://github.com/kevinchappell/formBuilder/commit/41c0b20a613f3cb790f48446d3da6313ee95d04e))
* Ensure we load these files via https otherwise these controls cannot be loaded when running from file:// ([56602ff](https://github.com/kevinchappell/formBuilder/commit/56602ffc1d3474c69a756a2eca45feb2bf51f2d0))
* formBuilder.actions.setLang now returns a promise ([58ec7e5](https://github.com/kevinchappell/formBuilder/commit/58ec7e54183226f739898d422bc863dfdd95aad5))
* load css files that exist when testing ([ad8147a](https://github.com/kevinchappell/formBuilder/commit/ad8147a9a533122a3cf4249adea1be23a74604db))

## [3.16.2](https://github.com/kevinchappell/formBuilder/compare/v3.16.1...v3.16.2) (2023-10-19)


### Bug Fixes

* don't bother lifting col/row classes if we don't have any to lift ([e012b8b](https://github.com/kevinchappell/formBuilder/commit/e012b8b105e843429c1eb63139c732333c0a95aa))
* fix lifting bootstrap col/row fields for autocomplete ([62b8e3b](https://github.com/kevinchappell/formBuilder/commit/62b8e3bf03b618103c871a1c3975553bc5d877c6))
* initialise formRender with an empty formData in cases when no formData is provided, otherwise we are unable to perform setData/render functions on the container ([48700de](https://github.com/kevinchappell/formBuilder/commit/48700de9984295a77c8e7a7f45350cfbe9f7f928))

## [3.16.1](https://github.com/kevinchappell/formBuilder/compare/v3.16.0...v3.16.1) (2023-10-19)


### Bug Fixes

* move custom control registration into its own class and initialise it per formBuilder instance. This ensures definitions set in one formBuilder do not interact with definitions in other formBuilder instances ([203cac7](https://github.com/kevinchappell/formBuilder/commit/203cac7125c187652ee995e10521d8a8d47eef7c))

# [3.16.0](https://github.com/kevinchappell/formBuilder/compare/v3.15.1...v3.16.0) (2023-10-19)


### Features

* Remove unmaintained Find Uploader ([3243ce3](https://github.com/kevinchappell/formBuilder/commit/3243ce35a20b01ecaba75ba6bf2d88234e8f868c))

## [3.15.1](https://github.com/kevinchappell/formBuilder/compare/v3.15.0...v3.15.1) (2023-10-17)


### Bug Fixes

* add missing call to getBootstrapColumnClass otherwise check will always fail. Ensure we retain additional styles set on colWrappers by only removing and adding the requested col-* classes ([10067e6](https://github.com/kevinchappell/formBuilder/commit/10067e6f5baf56e6448a71a12c4d0c7cabde678d))
* add test cases for Bootstrap helper methods and align functions with sane return values ([2fa6c0b](https://github.com/kevinchappell/formBuilder/commit/2fa6c0b9cbf26ca180c3d88c35547066781e1657))
* emit an event when clearing the stage, use this to reset formRow counter and stage setup for enhancedBootstrap function ([edd5500](https://github.com/kevinchappell/formBuilder/commit/edd55001af0fb6c9bd583ba1a67812938825dec3))
* revert change that incorrectly grabbed the description of the fields ([7d61aaf](https://github.com/kevinchappell/formBuilder/commit/7d61aaf4f2590a93874bfb859e97dc15887a6083))
* stopIndex is incorrectly calculated when in enhancedBootstrap mode. Fix this by always referring to children of the stage rather than LIs ([052a761](https://github.com/kevinchappell/formBuilder/commit/052a76163cee67c2c0a6f044368c51717b058601))
* Unify the regular and enhancedBootstrap UX ([c0e6d71](https://github.com/kevinchappell/formBuilder/commit/c0e6d71a0ba9295c16ed67ab4bab04a36fe497e6))
* use non-deprecated keyboardEvent.code instead of keyboardEvent.keycode. ([0881cff](https://github.com/kevinchappell/formBuilder/commit/0881cff68a27c67ff64781b92b551a36cf3e5f56))
* when sorting stage items don't allow the placeholder to go before a prepended and after an appended item ([6da23a2](https://github.com/kevinchappell/formBuilder/commit/6da23a2e442192c8b4ffb3d532afa3a3e3e1022b))

# [3.15.0](https://github.com/kevinchappell/formBuilder/compare/v3.14.0...v3.15.0) (2023-10-14)


### Features

* Support typeUserAttrs and typeUserEvents for all types with a wildcard '*' key ([ac0dcf3](https://github.com/kevinchappell/formBuilder/commit/ac0dcf35aa54def0a832bb205d0e48c00f93c40a))

# [3.14.0](https://github.com/kevinchappell/formBuilder/compare/v3.13.2...v3.14.0) (2023-10-14)


### Bug Fixes

* starControl did not save nor load userData ([a12603d](https://github.com/kevinchappell/formBuilder/commit/a12603d14e1d6dc24fbb10e6d85822f101f0ba1d))
* update tests for starRating ([f34a259](https://github.com/kevinchappell/formBuilder/commit/f34a259bf82e24c670381872dcc85edb027c186a))


### Features

* Add in additional HTML5 inputs time, datetime-local and range [supported by all major browsers]. For BC reasons time and datetime-local implemented as a subtype of date. ([0a1c141](https://github.com/kevinchappell/formBuilder/commit/0a1c14164a760cc66995f77ea1c6560b9227be00))

## [3.13.2](https://github.com/kevinchappell/formBuilder/compare/v3.13.1...v3.13.2) (2023-10-09)


### Bug Fixes

* Bumps postcss to 8.4.31 and updates ancestor dependencies postcss, autoprefixer, css-loader and postcss-loader. Update to postcss is a breaking update due to configuration changes preventing dependabot PR from being merged ([9d974b1](https://github.com/kevinchappell/formBuilder/commit/9d974b135d9e32bc1b6b81240a65243c42ab6a29))

## [3.13.1](https://github.com/kevinchappell/formBuilder/compare/v3.13.0...v3.13.1) (2023-10-09)


### Bug Fixes

* Add dompurify to dev requirements so that we can test the Sanitizer using the domPurify backend ([c342558](https://github.com/kevinchappell/formBuilder/commit/c342558ac6c87d95fc6c3a44af03ded348abcc16))
* Control may not be instered into the DOM at the time of onRender, keep a reference to the element in build() and use in onRender() ([33ea8c4](https://github.com/kevinchappell/formBuilder/commit/33ea8c479a094abf8b33e1a6f13ea13aeab327fe))
* Fix JSDoc ([d2b8629](https://github.com/kevinchappell/formBuilder/commit/d2b86295dab3a606829aab6dc5a33394ee9949d5))
* Mark XML helper functions as private and don't export them from utils module ([74d19a2](https://github.com/kevinchappell/formBuilder/commit/74d19a2345356e81b398d6367abb57ae4f529fc9))
* Remove unused local variable ([53649ae](https://github.com/kevinchappell/formBuilder/commit/53649aef3abfc32e3a4fdccd63333341c31baaa2))
* Replace non-standard and deprecated call to String.substr() with String.slice() ([813cecf](https://github.com/kevinchappell/formBuilder/commit/813cecfab3df50cb5ba93837b937055b2ab785ca))
* Return true from SanatizerAPI backend when successfully setting HTML ([c5d24c8](https://github.com/kevinchappell/formBuilder/commit/c5d24c849c2d8c7240012e6879eb5cd447d47364))

# [3.13.0](https://github.com/kevinchappell/formBuilder/compare/v3.12.4...v3.13.0) (2023-10-06)


### Bug Fixes

* Fix GH-594 and GH-727 Bring non-namespaced css selectors under .form-wrap.form-builder. Consolidate two definitions for .toggle-form. ([da89a92](https://github.com/kevinchappell/formBuilder/commit/da89a92beb1f2e59bf056805ab00734087226a00)), closes [#594](https://github.com/kevinchappell/formBuilder/issues/594) [#727](https://github.com/kevinchappell/formBuilder/issues/727)
* Fix GH-594 and GH-727 Bring non-namespaced css selectors under .rendered-form ([0caf26e](https://github.com/kevinchappell/formBuilder/commit/0caf26e74e53f2f1b92069d0a537c495d28183a3)), closes [#594](https://github.com/kevinchappell/formBuilder/issues/594) [#727](https://github.com/kevinchappell/formBuilder/issues/727)


### Features

* Extend disableInjectedStyle option to excluded only the embedded Bootstrap 3 classes while allow the formBuilder styles to be included. ([60524bc](https://github.com/kevinchappell/formBuilder/commit/60524bc108831141be9929c6d0f8e3979a699254))

## [3.12.4](https://github.com/kevinchappell/formBuilder/compare/v3.12.3...v3.12.4) (2023-10-05)


### Bug Fixes

* Setup of fallBack Sanitizer and processing of content when sanitizer is not enabled ([69c4a10](https://github.com/kevinchappell/formBuilder/commit/69c4a10a462d2ab27103cdb0eccda011c8e393fd))

## [3.12.3](https://github.com/kevinchappell/formBuilder/compare/v3.12.2...v3.12.3) (2023-10-05)


### Bug Fixes

* fallbackSantizer used before defined ([4fe4937](https://github.com/kevinchappell/formBuilder/commit/4fe49372f021353cf68d89e79267cc5581fa28a2))

## [3.12.2](https://github.com/kevinchappell/formBuilder/compare/v3.12.1...v3.12.2) (2023-10-05)


### Bug Fixes

* formData may contain HTML (eg Labels), need to escape for all dataTypes before adding into the code element. JSON is invalid if copy-paste from showData dialog ([c6f89d1](https://github.com/kevinchappell/formBuilder/commit/c6f89d1847c4dbd4a80c6ad2b43332f1f4e01ded))

## [3.12.1](https://github.com/kevinchappell/formBuilder/compare/v3.12.0...v3.12.1) (2023-10-05)


### Bug Fixes

* Calculation of next control insertion point took into account any divs created by enableEnhancedBootstrapGrid, appendNewField expects only LIs in the calculation and therefore inserts in the wrong position if the EnhancedBootstrap feature is enabled ([fd83248](https://github.com/kevinchappell/formBuilder/commit/fd8324861aeeedaa79b552da21464e8a95507364))
* changing column width in enhancedBootstrap feature did not work will with a touchpad. Mousemove event will fire multiple times (especially on MacOS with accelerated/decelerated scrolling) cauing the columns to erratically increase/decrease in size. ([eb4fd68](https://github.com/kevinchappell/formBuilder/commit/eb4fd6848acdf80595ee6d83dfaff2111c3eeafa))
* correctly show sort buttons in non-bootstrap mode. Use helpers.toggleHighlight when sorting elements rather than a custom animation ([a1f6638](https://github.com/kevinchappell/formBuilder/commit/a1f663897ee6e5c7191084ad6309d42cf4d5b629))
* Don't allow rows moved via the keyboard in the enhancedBootstrap feature to swap with prepended or appended fields ([5af6feb](https://github.com/kevinchappell/formBuilder/commit/5af6feba6bf0cfaa04807ae02b607232b261259a))
* enableEnhancedBootstrapGrid inserts the rowWrapperNode at the end of the stage instead of using the last position causing controls to always be inserted at the end even if prepend option is set. Use the location of the added Field's LI to append the rowWrapper before moving the LI within the row ([5990b67](https://github.com/kevinchappell/formBuilder/commit/5990b6725f24878f2ce9b5aac6bd998ef0ea34fa))
* helpers.getBootstrapColumnValue return value is an int, no need to parseInt on int ([8caa6a2](https://github.com/kevinchappell/formBuilder/commit/8caa6a25259f566bf777e14f01903612c9f21b3e))
* Only enable mobile sorting action buttons when enhancedBootstrap feature is not enabled. Bootstrap feature has functionality to move rows up and down and the two are incompatible ([f7fa676](https://github.com/kevinchappell/formBuilder/commit/f7fa67658af037528cbbffb3a29c3409a9638777))
* Reset the height of the InvisibleRowPlaceholders in enhancedBootstrap feature when hiding them ([40bf3fe](https://github.com/kevinchappell/formBuilder/commit/40bf3fe664e31bfd6bd991813b07ba4373f9cff4))
* When cloning a field in enhancedBootstrap mode invisible row placeholders need to be setup for the new fields ([49b3363](https://github.com/kevinchappell/formBuilder/commit/49b3363e2ccf8900cceb31853c2810be747f8ca7))
* When drag and dropping a Header field (and other types) in enhancedBootstrap mode the preview needs to be cleaned of row- and col- classes otherwise and invalid field element is placed on the stage. ([35d8ea5](https://github.com/kevinchappell/formBuilder/commit/35d8ea54138a61d6419db4fe563b3d5f9c550b6b))
* When drag and dropping elements in enhancedBootstrap mode the colWrapper mouseenter could fire after dragging a field onto another field, this would cause the rowPlaceholders to be hidden and then shown with 1px height ([ea91499](https://github.com/kevinchappell/formBuilder/commit/ea9149986c6852451d7882e2b8bf0b5d10978b99))

# [3.12.0](https://github.com/kevinchappell/formBuilder/compare/v3.11.1...v3.12.0) (2023-10-05)


### Bug Fixes

* correct the documentation for formRender action clear() ([21c206a](https://github.com/kevinchappell/formBuilder/commit/21c206a7e82836dab0591d41b2d031e7993a9b40))
* Improve browserslist target from '> 1%' which has less than 80% global coverage, to 'defaults' which improves coverage to 85.4% global and is equivalent to '> 0.5%, last 2 versions, Firefox ESR, not dead' ([01ca0fa](https://github.com/kevinchappell/formBuilder/commit/01ca0fa5cae6038b1d086e60a47463f907c032a3))


### Features

* Remove Internet Explorer from the supported browser list. It is no longer part of Browserslist >1% ([6c2e23f](https://github.com/kevinchappell/formBuilder/commit/6c2e23f137419d1456b31c161b7d12e99f0d9114))

## [3.11.1](https://github.com/kevinchappell/formBuilder/compare/v3.11.0...v3.11.1) (2023-10-05)


### Bug Fixes

* helpers.clearFields no longer supports an animate flag, update calls to this function ([ec9aa51](https://github.com/kevinchappell/formBuilder/commit/ec9aa51eea27a2790e5603a2b607d2c8ea3826b3))
* helpers.save() is called with and without minify being set, make false by default. Fix call to xmlSave which does not accept a minify parameter. Fix return type of helpers.save() ([41b10f0](https://github.com/kevinchappell/formBuilder/commit/41b10f0511455b3e9e01c903d9996eba86065a54))

# [3.11.0](https://github.com/kevinchappell/formBuilder/compare/v3.10.6...v3.11.0) (2023-10-05)


### Bug Fixes

* Add missing options to documentation config ([b903345](https://github.com/kevinchappell/formBuilder/commit/b90334509442dea96fa29b62cc6d7ecea30ef6f4))
* doc link ([d5648d1](https://github.com/kevinchappell/formBuilder/commit/d5648d179a3b78bb2e1e95ad85e5bbdce9ed7088))
* fix broken documentation links ([fa6b69f](https://github.com/kevinchappell/formBuilder/commit/fa6b69fe46f8619ac375eeddb871b3ebb31dce91))
* fix link to translation demo page from i18n option page in docs ([a4de783](https://github.com/kevinchappell/formBuilder/commit/a4de7837dcee08369593c10c8a524bfb33b07e59))
* Improve the definition of utils.trimObj() to not modify the source object ([b807646](https://github.com/kevinchappell/formBuilder/commit/b8076460ddeb9d9b3bd6652de96ad2201c1d5765))
* isPotentiallyDangerousAttribute returns false if the Sanitizer backends have been disabled via config ([c75ccdb](https://github.com/kevinchappell/formBuilder/commit/c75ccdb9c8ddbd5d3e262b6581bd41f9a8f8eb03))
* make dompurify the primary sanitizer backend if it is available. Sanitizer API is still experimental and not support by all browsers therefore it should only be used if DomPurify isn't included ([d0043d0](https://github.com/kevinchappell/formBuilder/commit/d0043d0432520ebc64059d86d0c8bd9c2c7ecc50))


### Features

* Implement XSS and DOM Clobbering protection ([a268a0a](https://github.com/kevinchappell/formBuilder/commit/a268a0a21d5e9ac620bef0758bc3a541968fe0f1))

## [3.10.6](https://github.com/kevinchappell/formBuilder/compare/v3.10.5...v3.10.6) (2023-09-21)


### Bug Fixes

* Due to recursion protection GitHub actions does not trigger the publish event when the release is created via another action. Instead use the workflow_run event to chain Publish with Deploy Website ([a702686](https://github.com/kevinchappell/formBuilder/commit/a702686770e526bbfa6c69b5b255ef52399f630b))

## [3.10.5](https://github.com/kevinchappell/formBuilder/compare/v3.10.4...v3.10.5) (2023-09-21)


### Bug Fixes

* auto deploy ([e8b31d4](https://github.com/kevinchappell/formBuilder/commit/e8b31d4be016b7ee9f07da3a7186d6a14b4faa7f))
* auto deploy ([4a918a9](https://github.com/kevinchappell/formBuilder/commit/4a918a9ded3bcb88760e7a605e538dbaddcb77d4))

## [3.10.4](https://github.com/kevinchappell/formBuilder/compare/v3.10.3...v3.10.4) (2023-09-21)


### Bug Fixes

* Handle the case of Autocomplete providing field as an array of HTMLElements ([d1b9b51](https://github.com/kevinchappell/formBuilder/commit/d1b9b51ee6d74904b2356559c799a9fbf8037447))

## [3.10.3](https://github.com/kevinchappell/formBuilder/compare/v3.10.2...v3.10.3) (2023-09-21)


### Bug Fixes

* Cancel stage sort if it would place the field before an appended field or after a prepended field ([82242e5](https://github.com/kevinchappell/formBuilder/commit/82242e55492490f71dddeecf900281c6f942af3b))
* Controls added by clicking need to be added as the second last item if opts.append is set ([478dbc5](https://github.com/kevinchappell/formBuilder/commit/478dbc53a98b365e8be132f6e89845a465528a71))
* invalid selector ([a153525](https://github.com/kevinchappell/formBuilder/commit/a15352538feb534e610a6301e72ffaa8726832c8))
* Remove unreachable branch in condition. $().closest can be used for both cases as closest() starts traversal from the current element ([619005a](https://github.com/kevinchappell/formBuilder/commit/619005a76cf8e2576905ee3bc518efcb856aafbe))
* When dragging a new control onto the stage, ensure the placeholder is placed after any prepended field and before any appended field ([d9cf010](https://github.com/kevinchappell/formBuilder/commit/d9cf010edb8a32fb0410f2eef21676af6993aba2))

## [3.10.2](https://github.com/kevinchappell/formBuilder/compare/v3.10.1...v3.10.2) (2023-09-21)


### Bug Fixes

* typeof will always return a string therefore fallback is never called ([4ca0dc9](https://github.com/kevinchappell/formBuilder/commit/4ca0dc9bd8f3505faaef3609d52432c7ab4fcb8b))
* warn when the typeUserAttr is unable to be processed instead of silently ignoring ([b54ff0d](https://github.com/kevinchappell/formBuilder/commit/b54ff0d7b5e9d3e03a96e8f350702fdbe9201407))

## [3.10.1](https://github.com/kevinchappell/formBuilder/compare/v3.10.0...v3.10.1) (2023-09-21)


### Bug Fixes

* Ensure boolean false values are kept as boolean false when getting the original value ([317d778](https://github.com/kevinchappell/formBuilder/commit/317d7781205286ced4d7445897e557afef3f42f4))

# [3.10.0](https://github.com/kevinchappell/formBuilder/compare/v3.9.18...v3.10.0) (2023-09-15)


### Features

* Add disableHTMLLabels option to formRender ([0fc2a91](https://github.com/kevinchappell/formBuilder/commit/0fc2a917874e2e6b83cac712124bc0c85cac2f5b))

## [3.9.18](https://github.com/kevinchappell/formBuilder/compare/v3.9.17...v3.9.18) (2023-09-13)


### Bug Fixes

* Apply the removal of row- and col- to child elements if field is more than just and input element (e.g. checkbox-group) ([323ac64](https://github.com/kevinchappell/formBuilder/commit/323ac64081fa28423f24edec14fcdb13349a30f0))
* tmpCleanColumnInfo may be called multiple times, remove previous work to ensure we don't keep appending tmp- to class names. Adjust class to include a __fb- prefix. ([6fd7018](https://github.com/kevinchappell/formBuilder/commit/6fd701869bbac74e921283507227d5060ccad0ea))

## [3.9.17](https://github.com/kevinchappell/formBuilder/compare/v3.9.16...v3.9.17) (2023-09-13)


### Bug Fixes

* --display-entrypoints doesn't exist in webpack v5 ([d7de595](https://github.com/kevinchappell/formBuilder/commit/d7de595c914ab04c8b72417ac53d6050c2251c0e))
* Bump semantic-release to latest ([b3ca67b](https://github.com/kevinchappell/formBuilder/commit/b3ca67b9cca07418c3cd85f398573ad99091bc55))
* remove deprecated package "request" and replace with build-in Node fetch API. Add "colors" dependency as it is no longer implicityly required by semantic-release ([a07ec5a](https://github.com/kevinchappell/formBuilder/commit/a07ec5aa0e2effa484b37d9b2374346f199c131a))

## [3.9.16](https://github.com/kevinchappell/formBuilder/compare/v3.9.15...v3.9.16) (2023-09-12)


### Bug Fixes

* cleanup duplicate and invalid declarations ([d1f07e9](https://github.com/kevinchappell/formBuilder/commit/d1f07e973859f48a921975ec3da2febc31a6c814))
* ensure that input[type=number] cannot overflow the stage on narrow window ([38684f3](https://github.com/kevinchappell/formBuilder/commit/38684f3fc7193435591d5a1feb16766de14bfd46))
* Remove unused CSS ([c8da5e6](https://github.com/kevinchappell/formBuilder/commit/c8da5e667e368ab6f833b7088c96226a27d565a5))

## [3.9.15](https://github.com/kevinchappell/formBuilder/compare/v3.9.14...v3.9.15) (2023-09-12)


### Bug Fixes

* Ensure generation of CSS rules for .formbuilder-mobile place the selector at the .form-wrap.form-builder level ([a364136](https://github.com/kevinchappell/formBuilder/commit/a364136411432bbde2a9da58621b1f625a9dae79))
* Show icon for custom controls on mobile phone screen sizes ([0f7a786](https://github.com/kevinchappell/formBuilder/commit/0f7a7867a0a188b49d83368d165c63287289a2de))
* Wrap the inputSet control in a span in the same way as custom controls to ensure CSS selectors are applied correctly ([2c42831](https://github.com/kevinchappell/formBuilder/commit/2c42831147c5f3cc18c40e106eb0f70ce25194a3))

## [3.9.14](https://github.com/kevinchappell/formBuilder/compare/v3.9.13...v3.9.14) (2023-09-12)


### Bug Fixes

* Implement field action buttons to sort form elements from touch screen devices not supported by jQuery sortable ([54fa332](https://github.com/kevinchappell/formBuilder/commit/54fa3323420e7e3d80c5e7847373752fae27363c))

## [3.9.13](https://github.com/kevinchappell/formBuilder/compare/v3.9.12...v3.9.13) (2023-09-12)


### Bug Fixes

* Array of strings was removed from support in TinyMCE6, use a plugin definition format supported my all versions (https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/#plugin-loading-format-change) ([92a8a72](https://github.com/kevinchappell/formBuilder/commit/92a8a720ce3b4c92414fd91a6a4ac10fe96c3ba1))
* Array.concat does not modify the existing arrays, return value was previously discarded ([92496e3](https://github.com/kevinchappell/formBuilder/commit/92496e3f45ed6ca109fd8d8c4b572fa9fc652a26))
* helper.js classNames was overzealous in removing classNames starting with btn- when syncing with style field, only remove those that are one of the config.js styles.btn styles ([922ca80](https://github.com/kevinchappell/formBuilder/commit/922ca80361c7a8ac8c4cf9e9148479fcd73a17bf))
* Only load TinyMCE if it hasn't already been loaded by the page, this allows specific versions to be loaded outside the hardcoded version in the plugin ([241a83a](https://github.com/kevinchappell/formBuilder/commit/241a83a91619b7a9784f79ace0cf5ff65debc150))
* Remove any plugins we define by default from the options if they have been removed in the loaded version of TinyMCE ([de061b2](https://github.com/kevinchappell/formBuilder/commit/de061b2ef36bd9401c95d11c7dafe62bd5367e62))
* use the Promise interface for initialising tinymce. tinymce.editors is removed in TinyMCE6 so use the tinymce.get() and tinymce.remove() interfaces which is forwards compatible ([4583b88](https://github.com/kevinchappell/formBuilder/commit/4583b88197f2288f6ab0feea4d1c86d273998b70))
* window.tinymce.editors[] is not forward compatible with later versions of TinyMCE. Use the get() method instead to retrieve the Editor instance ([255ed88](https://github.com/kevinchappell/formBuilder/commit/255ed88e13fd1541d908e032f7040c16ea70a439))

## [3.9.12](https://github.com/kevinchappell/formBuilder/compare/v3.9.11...v3.9.12) (2023-09-12)


### Bug Fixes

* revert change made in https://github.com/kevinchappell/formBuilder/commit/e0c0f2ea8f204da6e11d8de938e27ca6687d5588 which declared field as a const prior to the fallback to selecting the last field in the form. This change also prevents incorrect removing of the last field in the case where a fieldID is provided but which was not found in the form ([0b7e1bb](https://github.com/kevinchappell/formBuilder/commit/0b7e1bb3cbd85884c22e484e4f234426a4ba38d0))

## [3.9.11](https://github.com/kevinchappell/formBuilder/compare/v3.9.10...v3.9.11) (2023-09-12)


### Bug Fixes

* i18n is a straight key/value pair, it does not contain a get() function ([ebe59ce](https://github.com/kevinchappell/formBuilder/commit/ebe59ce47c69573ded91cf1d3a69ccc1328097de))
* If no value was set for a numberAttribute the value attribute's value was used instead. This causes min/max/step/rows/maxLen number attributes to incorrectly be assigned a value if they are not set in formData but a number exists in the value attribute ([28b1a6f](https://github.com/kevinchappell/formBuilder/commit/28b1a6f0215c39c76e68da819d6747a5d1d7d13e))
* Use the i18n translated label for boolean typeUserAttrs. Fixes [#1391](https://github.com/kevinchappell/formBuilder/issues/1391) ([bc04612](https://github.com/kevinchappell/formBuilder/commit/bc04612ee32d6fe69dc9db37b12cd66faa20df85))

## [3.9.10](https://github.com/kevinchappell/formBuilder/compare/v3.9.9...v3.9.10) (2023-08-27)


### Bug Fixes

* Ensure that default selected checkboxes are unselected when loading userData that doesn't contain them. ([2d284c9](https://github.com/kevinchappell/formBuilder/commit/2d284c95114235b2a541f96611e25f47ea4c0086))
* The major browsers handle new lines in contenteditable blocks by inserting <div> tags. This causes invalid HTML when inserting the content into a <p> with the paragraph control and when constructing <label> tags. Setting display: inline-block forces the browsers to use a <br> tag instead for new lines. ([5b700cb](https://github.com/kevinchappell/formBuilder/commit/5b700cbd757643dce55f343bda2ed91d34e98336))

## [3.9.9](https://github.com/kevinchappell/formBuilder/compare/v3.9.8...v3.9.9) (2023-08-20)


### Bug Fixes

* auto deploy site ([aeb32e4](https://github.com/kevinchappell/formBuilder/commit/aeb32e41f84318bb97178e7ab86ecb0599d120bf))

## [3.9.8](https://github.com/kevinchappell/formBuilder/compare/v3.9.7...v3.9.8) (2023-08-20)


### Bug Fixes

* auto deploy site ([ff7538d](https://github.com/kevinchappell/formBuilder/commit/ff7538d311490275d09af46bb2068c9e9926c37d))

## [3.9.7](https://github.com/kevinchappell/formBuilder/compare/v3.9.6...v3.9.7) (2023-08-20)


### Bug Fixes

* auto deploy site ([3e87738](https://github.com/kevinchappell/formBuilder/commit/3e877384eca777f8832339d746231c45b3614ca6))

## [3.9.6](https://github.com/kevinchappell/formBuilder/compare/v3.9.5...v3.9.6) (2023-08-20)


### Bug Fixes

* auto deploy site ([3fc6e0d](https://github.com/kevinchappell/formBuilder/commit/3fc6e0daeb44082443d3afc5b973b7ecb5b15f0b))

## [3.9.5](https://github.com/kevinchappell/formBuilder/compare/v3.9.4...v3.9.5) (2023-08-20)


### Bug Fixes

* auto deploy site ([676a1ec](https://github.com/kevinchappell/formBuilder/commit/676a1ec1ec50dd2ea1edf4b62940c2ff47aeb174))

## [3.9.4](https://github.com/kevinchappell/formBuilder/compare/v3.9.3...v3.9.4) (2023-08-20)


### Bug Fixes

* auto deploy site ([7da55b2](https://github.com/kevinchappell/formBuilder/commit/7da55b2b8be7bd4e837c3ec8c5277db8a15f04f8))

## [3.9.3](https://github.com/kevinchappell/formBuilder/compare/v3.9.2...v3.9.3) (2023-08-20)


### Bug Fixes

* auto site deploy ([fe7849e](https://github.com/kevinchappell/formBuilder/commit/fe7849e2b822b8d86f9deb84e3be88be65091ef9))

## [3.9.2](https://github.com/kevinchappell/formBuilder/compare/v3.9.1...v3.9.2) (2023-08-20)


### Bug Fixes

* auto site deploy ([b9c5a63](https://github.com/kevinchappell/formBuilder/commit/b9c5a635c60ef4ba89d1eae8dfe9a5458ed2af4b))

## [3.9.1](https://github.com/kevinchappell/formBuilder/compare/v3.9.0...v3.9.1) (2023-08-20)


### Bug Fixes

* publish github action ([39a73fb](https://github.com/kevinchappell/formBuilder/commit/39a73fb826fe81eae5398480d52d2f7a34267eaf))

# [3.9.0](https://github.com/kevinchappell/formBuilder/compare/v3.8.3...v3.9.0) (2023-08-20)


### Features

* update readme ([2379b5b](https://github.com/kevinchappell/formBuilder/commit/2379b5baba75df148afa1eba8e2d9bf4b4a3cdbb))

## [3.8.3](https://github.com/kevinchappell/formBuilder/compare/v3.8.2...v3.8.3) (2022-03-25)


### Bug Fixes

* formRender api ([05a3476](https://github.com/kevinchappell/formBuilder/commit/05a3476f2514b8b8eb238c37d971981b821f035a)), closes [#1279](https://github.com/kevinchappell/formBuilder/issues/1279)

## [3.8.2](https://github.com/kevinchappell/formBuilder/compare/v3.8.1...v3.8.2) (2022-03-25)


### Bug Fixes

* clearFields ([292b54f](https://github.com/kevinchappell/formBuilder/commit/292b54f91fbb0bfeae7a61d391eea1d36dcaf450)), closes [#1276](https://github.com/kevinchappell/formBuilder/issues/1276)
* prevent fieldRow actions when not present ([b2eeae2](https://github.com/kevinchappell/formBuilder/commit/b2eeae2b2aa0cbaf6bc6cff4d5bb6e04b78eeafc))

## [3.8.1](https://github.com/kevinchappell/formBuilder/compare/v3.8.0...v3.8.1) (2022-03-18)


### Bug Fixes

* contenteditable ([4abe7a4](https://github.com/kevinchappell/formBuilder/commit/4abe7a4ca0afae74a2120653759a3e99383da65f))

# [3.8.0](https://github.com/kevinchappell/formBuilder/compare/v3.7.4...v3.8.0) (2022-03-17)


### Features

* enhanced column features ([023f8b7](https://github.com/kevinchappell/formBuilder/commit/023f8b7bf040b21a18f8a8e7870da8918998bdc4))

## [3.7.4](https://github.com/kevinchappell/formBuilder/compare/v3.7.3...v3.7.4) (2022-03-11)


### Bug Fixes

* **textarea:** remove type attribute from textarea ([bc68b3f](https://github.com/kevinchappell/formBuilder/commit/bc68b3ff939b41cd888a231b73e8a2bb13b2ca5a))

## [3.7.3](https://github.com/kevinchappell/formBuilder/compare/v3.7.2...v3.7.3) (2021-07-13)


### Bug Fixes

* documentation code colors ([b2db0d7](https://github.com/kevinchappell/formBuilder/commit/b2db0d7a06576a05802d8af68e89adad45301824))

## [3.7.2](https://github.com/kevinchappell/formBuilder/compare/v3.7.1...v3.7.2) (2021-06-07)


### Bug Fixes

* save not returning js formData ([490ad72](https://github.com/kevinchappell/formBuilder/commit/490ad72c3efd7055792c9990821005f65d6ee812))

## [3.7.1](https://github.com/kevinchappell/formBuilder/compare/v3.7.0...v3.7.1) (2021-06-04)


### Bug Fixes

* setData working intermittently ([753280f](https://github.com/kevinchappell/formBuilder/commit/753280f183663dd153802458209b6427c10f4c36)), closes [#1197](https://github.com/kevinchappell/formBuilder/issues/1197)

# [3.7.0](https://github.com/kevinchappell/formBuilder/compare/v3.6.2...v3.7.0) (2021-05-28)


### Features

* persistDefaultFields option ([36f45f1](https://github.com/kevinchappell/formBuilder/commit/36f45f11535d5d8dedd38c94e0d6bc031a13d29c)), closes [#980](https://github.com/kevinchappell/formBuilder/issues/980)

## [3.6.2](https://github.com/kevinchappell/formBuilder/compare/v3.6.1...v3.6.2) (2020-12-07)


### Bug Fixes

* radio group option remove button visible on second option ([8a838f7](https://github.com/kevinchappell/formBuilder/commit/8a838f7b18835af6a7055f3db183590eb8255c9c)), closes [#1143](https://github.com/kevinchappell/formBuilder/issues/1143)

## [3.6.1](https://github.com/kevinchappell/formBuilder/compare/v3.6.0...v3.6.1) (2020-08-24)


### Bug Fixes

* onAddOption default ([55f4a8f](https://github.com/kevinchappell/formBuilder/commit/55f4a8f273c11641e882a149aaeba782ba1a031d))

# [3.6.0](https://github.com/kevinchappell/formBuilder/compare/v3.5.2...v3.6.0) (2020-08-24)


### Features

* custom option attributes ([c072cae](https://github.com/kevinchappell/formBuilder/commit/c072caeb7db83d61faf12c4ee9783e5ae6d28cbf)), closes [#1038](https://github.com/kevinchappell/formBuilder/issues/1038) [#986](https://github.com/kevinchappell/formBuilder/issues/986) [#956](https://github.com/kevinchappell/formBuilder/issues/956)

## [3.5.2](https://github.com/kevinchappell/formBuilder/compare/v3.5.1...v3.5.2) (2020-08-23)


### Bug Fixes

* icon name conflict ([1231aae](https://github.com/kevinchappell/formBuilder/commit/1231aae178edad3dad8cdffb753020db3bc6a24c))

## [3.5.1](https://github.com/kevinchappell/formBuilder/compare/v3.5.0...v3.5.1) (2020-08-23)


### Bug Fixes

* site home url in /docs ([b73d695](https://github.com/kevinchappell/formBuilder/commit/b73d69553998b0356eb907316c7face77bbd70f4))

# [3.5.0](https://github.com/kevinchappell/formBuilder/compare/v3.4.5...v3.5.0) (2020-08-23)


### Features

* onAddOption ([7824e08](https://github.com/kevinchappell/formBuilder/commit/7824e08c657df9b55bf65597b48067965780471a)), closes [#1098](https://github.com/kevinchappell/formBuilder/issues/1098)

## [3.4.5](https://github.com/kevinchappell/formBuilder/compare/v3.4.4...v3.4.5) (2020-08-23)


### Bug Fixes

* onSave not called when save called from the api ([d607b02](https://github.com/kevinchappell/formBuilder/commit/d607b02c4001bee160aade80c11cce93451a12d0)), closes [#1058](https://github.com/kevinchappell/formBuilder/issues/1058)

## [3.4.4](https://github.com/kevinchappell/formBuilder/compare/v3.4.3...v3.4.4) (2020-08-22)


### Bug Fixes

* checkbox other value ([7e7569e](https://github.com/kevinchappell/formBuilder/commit/7e7569ef770d2adc568b1663c5a5ebb4095cf2c9)), closes [#1061](https://github.com/kevinchappell/formBuilder/issues/1061)
* timeout memory leaks ([34fa376](https://github.com/kevinchappell/formBuilder/commit/34fa3768979743730d7a558cde66e0cfe188dc91))

## [3.4.3](https://github.com/kevinchappell/formBuilder/compare/v3.4.2...v3.4.3) (2020-08-22)


### Bug Fixes

* copy language files from module ([0fee6c3](https://github.com/kevinchappell/formBuilder/commit/0fee6c3fbae0f4ced16ad196494a891f9d140066)), closes [#1068](https://github.com/kevinchappell/formBuilder/issues/1068)

## [3.4.2](https://github.com/kevinchappell/formBuilder/compare/v3.4.1...v3.4.2) (2020-03-04)


### Bug Fixes

* clone id bug ([82c29a9](https://github.com/kevinchappell/formBuilder/commit/82c29a9448ce31b247a24fb2c678f101bfb04cd0))

## [3.4.1](https://github.com/kevinchappell/formBuilder/compare/v3.4.0...v3.4.1) (2020-03-02)


### Bug Fixes

* multiple attribute added to select ([bb04cd4](https://github.com/kevinchappell/formBuilder/commit/bb04cd4fa41a73520aec669da370699a2c900544))

# [3.4.0](https://github.com/kevinchappell/formBuilder/compare/v3.3.4...v3.4.0) (2020-02-02)


### Bug Fixes

* website generation and deployment ([6ba8ce0](https://github.com/kevinchappell/formBuilder/commit/6ba8ce094c2b28853413613f46581f7cc79702e3))


### Features

* **editor:** hidden field labels ([f9b648c](https://github.com/kevinchappell/formBuilder/commit/f9b648c109584202b5d739886b5d449e8807f94c))

## [3.3.5](https://github.com/kevinchappell/formBuilder/compare/v3.3.4...v3.3.5) (2020-02-02)


### Bug Fixes

* website generation and deployment ([6ba8ce0](https://github.com/kevinchappell/formBuilder/commit/6ba8ce094c2b28853413613f46581f7cc79702e3))

## [3.3.4](https://github.com/kevinchappell/formBuilder/compare/v3.3.3...v3.3.4) (2020-02-01)


### Bug Fixes

* update dependencies ([2c81e41](https://github.com/kevinchappell/formBuilder/commit/2c81e4114870abb5b49e9fc780e22d791d6e845c))

## [3.3.3](https://github.com/kevinchappell/formBuilder/compare/v3.3.2...v3.3.3) (2020-02-01)


### Bug Fixes

* travis deploy ([127909d](https://github.com/kevinchappell/formBuilder/commit/127909d5e36416d1bdab8356884317d724ddd0bb))
* travis node version, include docs in dist package ([78799a5](https://github.com/kevinchappell/formBuilder/commit/78799a520f6af0bea7800ccfb27473a6a60844a7))

## [3.3.2](https://github.com/kevinchappell/formBuilder/compare/v3.3.1...v3.3.2) (2020-01-31)


### Bug Fixes

* build ([55721ec](https://github.com/kevinchappell/formBuilder/commit/55721ec85dc55f289d46d1ead3941bdbbdc66f21))

## [3.3.1](https://github.com/kevinchappell/formBuilder/compare/v3.3.0...v3.3.1) (2020-01-28)


### Bug Fixes

* field removed from stage but not formData ([2c6d824](https://github.com/kevinchappell/formBuilder/commit/2c6d824fe5dcbe413440b3c3fa59b5944e1c5bf9)), closes [#1028](https://github.com/kevinchappell/formBuilder/issues/1028)

# [3.3.0](https://github.com/kevinchappell/formBuilder/compare/v3.2.6...v3.3.0) (2020-01-26)


### Bug Fixes

* **demo:** clear current id when removed from stage ([e0c0f2e](https://github.com/kevinchappell/formBuilder/commit/e0c0f2ea8f204da6e11d8de938e27ca6687d5588))


### Features

* getCurrentFieldId ([c0148b3](https://github.com/kevinchappell/formBuilder/commit/c0148b33dc7154e2bc2a241255b7a2db6257534f)), closes [#571](https://github.com/kevinchappell/formBuilder/issues/571)

## [3.2.6](https://github.com/kevinchappell/formBuilder/compare/v3.2.5...v3.2.6) (2019-12-31)


### Bug Fixes

* adblock because of fb- prefix ([e091474](https://github.com/kevinchappell/formBuilder/commit/e091474219cba88ff0c950649de62ec0de9ab414))

## [3.2.5](https://github.com/kevinchappell/formBuilder/compare/v3.2.4...v3.2.5) (2019-06-26)


### Bug Fixes

* browserslist config, build:vendor ([32acf6b](https://github.com/kevinchappell/formBuilder/commit/32acf6b))

## [3.2.4](https://github.com/kevinchappell/formBuilder/compare/v3.2.3...v3.2.4) (2019-05-27)


### Bug Fixes

* npm audit ([d7d7535](https://github.com/kevinchappell/formBuilder/commit/d7d7535))
* numeric value preservation ([9e4de4f](https://github.com/kevinchappell/formBuilder/commit/9e4de4f)), closes [#945](https://github.com/kevinchappell/formBuilder/issues/945)

## [3.2.3](https://github.com/kevinchappell/formBuilder/compare/v3.2.2...v3.2.3) (2019-05-02)


### Bug Fixes

* development build, upgrade babel ([a3e446c](https://github.com/kevinchappell/formBuilder/commit/a3e446c)), closes [#942](https://github.com/kevinchappell/formBuilder/issues/942)
* use run-script instead of run ([e8275e5](https://github.com/kevinchappell/formBuilder/commit/e8275e5))

## [3.2.2](https://github.com/kevinchappell/formBuilder/compare/v3.2.1...v3.2.2) (2019-04-23)


### Bug Fixes

* update jquery dependency ([5541494](https://github.com/kevinchappell/formBuilder/commit/5541494))

## [3.2.1](https://github.com/kevinchappell/formBuilder/compare/v3.2.0...v3.2.1) (2019-03-30)


### Bug Fixes

* **btn:** button style classes not correctly applied ([3278840](https://github.com/kevinchappell/formBuilder/commit/3278840))

# [3.2.0](https://github.com/kevinchappell/formBuilder/compare/v3.1.3...v3.2.0) (2019-03-29)


### Features

* **i18n:** add support for translatable typeUserAttrs ([158b278](https://github.com/kevinchappell/formBuilder/commit/158b278)), closes [#919](https://github.com/kevinchappell/formBuilder/issues/919)

## [3.1.3](https://github.com/kevinchappell/formBuilder/compare/v3.1.2...v3.1.3) (2018-12-12)


### Bug Fixes

* **dependency:** har-validator 5.1.2 was unpublished, causing ci builds to fail. Update dependencies to fix ([051c0e0](https://github.com/kevinchappell/formBuilder/commit/051c0e0))
* **langs:** Update formBuilder-languages dependency ([5b39cb1](https://github.com/kevinchappell/formBuilder/commit/5b39cb1))

## [3.1.2](https://github.com/kevinchappell/formBuilder/compare/v3.1.1...v3.1.2) (2018-11-20)


### Bug Fixes

* **xml:** fields are nesting ([428ad4f](https://github.com/kevinchappell/formBuilder/commit/428ad4f))

## [3.1.1](https://github.com/kevinchappell/formBuilder/compare/v3.1.0...v3.1.1) (2018-11-19)


### Bug Fixes

* **formRender:** error when destrtcuring null ([0b958af](https://github.com/kevinchappell/formBuilder/commit/0b958af))

# [3.1.0](https://github.com/kevinchappell/formBuilder/compare/v3.0.2...v3.1.0) (2018-11-15)


### Features

* **column:** add bootstrap grid/column support ([e9cc23a](https://github.com/kevinchappell/formBuilder/commit/e9cc23a)), closes [#859](https://github.com/kevinchappell/formBuilder/issues/859)

## [3.0.2](https://github.com/kevinchappell/formBuilder/compare/v3.0.1...v3.0.2) (2018-11-12)


### Bug Fixes

* **package.json:** remove preinstall ([#865](https://github.com/kevinchappell/formBuilder/issues/865)) ([3ab0d35](https://github.com/kevinchappell/formBuilder/commit/3ab0d35))

## [3.0.1](https://github.com/kevinchappell/formBuilder/compare/v3.0.0...v3.0.1) (2018-11-08)


### Bug Fixes

* **plugins:** fix plugins build script ([de388bd](https://github.com/kevinchappell/formBuilder/commit/de388bd))

# [3.0.0](https://github.com/kevinchappell/formBuilder/compare/v2.10.9...v3.0.0) (2018-11-07)


### Bug Fixes

* **labels:** html in xml labels breaks forms ([#858](https://github.com/kevinchappell/formBuilder/issues/858)) ([ea29e79](https://github.com/kevinchappell/formBuilder/commit/ea29e79))


### BREAKING CHANGES

* **labels:** Existing forms created using xml dataType that have html labels will have their labels converted to text

Note: the next major release will drop xml support completely

## [2.10.9](https://github.com/kevinchappell/formBuilder/compare/v2.10.8...v2.10.9) (2018-11-06)


### Bug Fixes

* **docs:** use highlightjs 9.12.0 ([2c61944](https://github.com/kevinchappell/formBuilder/commit/2c61944))

## [2.10.8](https://github.com/kevinchappell/formBuilder/compare/v2.10.7...v2.10.8) (2018-11-06)


### Bug Fixes

* **cd:** website auto deploy ([8235f2b](https://github.com/kevinchappell/formBuilder/commit/8235f2b))

## [2.10.7](https://github.com/kevinchappell/formBuilder/compare/v2.10.6...v2.10.7) (2018-11-06)


### Bug Fixes

* **cd:** update travis config and deploy script ([ac03283](https://github.com/kevinchappell/formBuilder/commit/ac03283))
* **formData:** formData getter not working ([235b77e](https://github.com/kevinchappell/formBuilder/commit/235b77e))

## [2.10.6](https://github.com/kevinchappell/formBuilder/compare/v2.10.5...v2.10.6) (2018-11-06)


### Bug Fixes

* **cd:** update deploy script to not require babel-node ([f161be5](https://github.com/kevinchappell/formBuilder/commit/f161be5))
* **cd:** update readme, have deploy script return, run deploy script directly ([1916870](https://github.com/kevinchappell/formBuilder/commit/1916870))

## [2.10.5](https://github.com/kevinchappell/formBuilder/compare/v2.10.4...v2.10.5) (2018-11-06)


### Bug Fixes

* **cd:** semantic-release plugins, site deploy commands ([57325bc](https://github.com/kevinchappell/formBuilder/commit/57325bc))

## [2.10.4](https://github.com/kevinchappell/formBuilder/compare/v2.10.3...v2.10.4) (2018-11-06)


### Bug Fixes

* **cd:** update encrypted access keys ([d36cab9](https://github.com/kevinchappell/formBuilder/commit/d36cab9))
* **ci:** deploy ([68e897a](https://github.com/kevinchappell/formBuilder/commit/68e897a))
* **ci:** deploy script typo ([2e3fbe1](https://github.com/kevinchappell/formBuilder/commit/2e3fbe1))
* **ci:** deploys ([63aa874](https://github.com/kevinchappell/formBuilder/commit/63aa874))
* **docs:** Add missing documentation ([#855](https://github.com/kevinchappell/formBuilder/issues/855)) ([094573c](https://github.com/kevinchappell/formBuilder/commit/094573c)), closes [#678](https://github.com/kevinchappell/formBuilder/issues/678) [#648](https://github.com/kevinchappell/formBuilder/issues/648)
* **package.json:** update repository.url ([a511e0d](https://github.com/kevinchappell/formBuilder/commit/a511e0d))

- v2.10.3 - Bugfix fbControlsLoaded [#853](https://github.com/kevinchappell/formBuilder/pull/853)
- v2.10.2 - Bugfix i18n lookups [#852](https://github.com/kevinchappell/formBuilder/pull/852)
- v2.10.1 - Bugfix typeUserAttrs [#851](https://github.com/kevinchappell/formBuilder/pull/851)
- v2.10.0 - Release 2.10.0 [#842](https://github.com/kevinchappell/formBuilder/pull/842)
  ## Fixed:
  - inline checkbox/radio
  - bug with clear() as reported in #750 and #828, control type check to clear() so that method doesn't reset the value for checkboxes and radio buttons, which caused the userData getter to work incorrectly.
  - #530, Modified helpers.js::xmlSave() to serialize field data so any XML in a field's attributes is properly escaped. (#804)
  - doubleclick event handler, resolves #535
  - new option name, resolves #687
  - name attribute for inputs with multiple, resolves #736
  - current formData not carried over to new formBuilder instance on language change, resolves #735
  - attrString util, resolves #739
  - Lock dev dependency versions, prevents breaking changes introduced by node_modules
  - Ensure custom attributes are included in exported data resolves #824 resolves #773
  - Other option should hide input value when deselected, resolves #808
  - do not disable className or name attributes- resolves #819
  - ensure html from label is correctly escaped, resolves #816
  - inputSet bug
  - label saving, add esc to close data modal, resolves #757
  - attribute placeholder typo, fix label added when it should be removed, resolves #763
  - bug where empty className is not applied
  - label overflow problem, resolves #779
  - duplicate custom controls


  ## Added:
  - Deploy script
  - formbuilder-languages module
  - disableSubtypes option
  - `onremove` to typeUserEvents
  - `disableHTMLLabels` option, resolves #747
  - `replaceFields` option
  - `layout` and `layoutTemplates` docs
  - `onOpenFieldEdit` and `scrollToFieldOnAdd` options, `closeAllFieldEdit` action
  - `toggleAllFieldEdit` action
  - `setData` and render actions to formRender, resolves #770
  - `onFieldAdd` option and `toggleFieldEdit` action, resolves #772
  - Enable multiple select field for typeUserAttrs, resolves #776
  - `allowStageSort` option, resolves #777


  ## Removed:
  - remove mi18n network dependency
  - package-lock.json
  - replace comma, resolves #740
  - unused modules
  - gulp


  ## Improved:
  - Documentation
  - xmlSave performance and code style
  - Demo, moved to src so can transpile, inline style, more api buttons for manual testing
  - Switch to yarn
  - Use existing formBuilder instance instead of creating a new one on setLang, fixes memory leak where reference was maintained to old instance
  - typeUserAttrs docs, resolves #810
  - code style and cleanup
  - use spaces instead of tabs for data formatting
  - use both instance methods and jQuery plugin calls ie. `fbInstance.setData(formData)` and `$('.build-wrap').formBuilder('setData', formData)`
  - update mi18n, add support checkbox custom attributes
  - reduce file churn
  - improve stickyControls
  - use onRender instead of setTimeout

- v2.9.8 - hotfix(inputSets): control icon [#634](https://github.com/kevinchappell/formBuilder/pull/634)
- v2.9.7 - Merge branch 'hotfix/2.9.7'
- v2.9.6 - Removed unused style, add get-data class to data button [#605](https://github.com/kevinchappell/formBuilder/pull/605)
- v2.9.5 - Improvements(options) disabledFieldButtons option [#604](https://github.com/kevinchappell/formBuilder/pull/604)
- v2.9.4 - Pull primary input outside of label for "other" option [#598](https://github.com/kevinchappell/formBuilder/pull/598)
- v2.9.3 - Fix Edge "Help Text" issue #560 [#596](https://github.com/kevinchappell/formBuilder/pull/596)
- v2.9.2 - Do not default select radio [#603](https://github.com/kevinchappell/formBuilder/pull/603)
- v2.9.1 - Move bootstrap stuff inside .formbuilder selector [#602](https://github.com/kevinchappell/formBuilder/pull/602)
- v2.9.0 - feature(option) replaceFields [#593](https://github.com/kevinchappell/formBuilder/pull/593)
- v2.8.0 - improvement(checkbox): markup change [#585](https://github.com/kevinchappell/formBuilder/pull/585)
- v2.7.0 - v2.6.0
- v2.6.0 - Add support for disabling form action buttons (copy, edit, remove) [#550](https://github.com/kevinchappell/formBuilder/pull/550)
- v2.5.3 - Hotfix: paragraph label overflow resolves #517 [#525](https://github.com/kevinchappell/formBuilder/pull/525)
- v2.5.2 - Fineuploader error handling & reporting [#516](https://github.com/kevinchappell/formBuilder/pull/516)
  + fixed autocomplete control behaviour [#521](https://github.com/kevinchappell/formBuilder/pull/521)
- v2.5.1 - copy in control config rather than reference it so any alterations arent global. support fineuploader handler having querystring args. fix bug in applying fineuploader config to defaults. [#513](https://github.com/kevinchappell/formBuilder/pull/513)
- v2.5.0 - upgraded fineuploader plugin to use cdnjs by default so it no longer … [#509](https://github.com/kevinchappell/formBuilder/pull/509)
- v2.4.1 - Hotfix: disableFields option [#508](https://github.com/kevinchappell/formBuilder/pull/508)
- v2.4.0 - New control plugin to replace the default file upload type [#506](https://github.com/kevinchappell/formBuilder/pull/506)
- v2.3.5 - Hotfix: Constraint API [#505](https://github.com/kevinchappell/formBuilder/pull/505)
- v2.3.4 - Hotfix: preload values to exisitng field types, fix fieldOrder [#501](https://github.com/kevinchappell/formBuilder/pull/501)
- v2.3.3 - Hotfix: actionButtons are submitting forms [#498](https://github.com/kevinchappell/formBuilder/pull/498)
- v2.3.2 - Hotfix: btn-undefined [#496](https://github.com/kevinchappell/formBuilder/pull/496)
- v2.3.1 - Hotfix: opts.messages, sourcemaps [#495](https://github.com/kevinchappell/formBuilder/pull/495)
- v2.3.0 - General cleanup, actionButtons option [#494](https://github.com/kevinchappell/formBuilder/pull/494)
- v2.2.8 - Bug/extend fields [#493](https://github.com/kevinchappell/formBuilder/pull/493)
- v2.2.7 - Make checkbox valid when at least one checkbox is checked [#490](https://github.com/kevinchappell/formBuilder/pull/490)
- v2.2.6 - Remove outdated unminified files [#488](https://github.com/kevinchappell/formBuilder/pull/488)
- v2.2.5 - Update package manager files to serve correct- updated version [#487](https://github.com/kevinchappell/formBuilder/pull/487)
- v2.2.4 - Fix Other input behavior [#485](https://github.com/kevinchappell/formBuilder/pull/485)
- v2.2.3 - Return unformatted JSON by default [#481](https://github.com/kevinchappell/formBuilder/pull/481)
- v2.2.2 - Hotfix: getData [#464](https://github.com/kevinchappell/formBuilder/pull/464)
- v2.2.1 - Hotfix: bootstrap addon style, Update documentation
- v2.2.0 - Feature: Controls API, see: https://formbuilder.online/docs/formBuilder/overview/
           Feature: Injected styles, no longer to need include css file.
- v2.1.2 - Update npm scripts
- v2.1.1 - Required checkbox fix, form-horizontal css alignment fix [#422](https://github.com/kevinchappell/formBuilder/pull/422)
- v2.1.0 - Update docs & Critical fixes [#420](https://github.com/kevinchappell/formBuilder/pull/420)
- v2.0.0 - ✨ Custom Controls, Automatic i18n, WYSIWYG Editor, HTML Labels ✨ [#414](https://github.com/kevinchappell/formBuilder/pull/414)
- v1.24.7 - Fix textarea value not saving when preview changed [#408](https://github.com/kevinchappell/formBuilder/pull/408)
- v1.24.6 - Bugfix: XMLParser children in ie #369, date form-control class #351 [#373](https://github.com/kevinchappell/formBuilder/pull/373)
- v1.24.5 - Code cleanup, alignment issues, check select required fix
- v1.24.4 - Bug fixes: bower.json, formRender children undefined
- v1.24.2 - Hotfix: typeUserEvents, attribute array converted to comma separated list [#297](https://github.com/kevinchappell/formBuilder/pull/297)
- v1.24.1 - Bugfix: defaultFields names are overwritten [#295](https://github.com/kevinchappell/formBuilder/pull/295)
- v1.24.0 - Hotfix and Feature bonanza [#293](https://github.com/kevinchappell/formBuilder/pull/293)
- v1.23.1 - Hotfix: deleteId undefined [#291](https://github.com/kevinchappell/formBuilder/pull/291)
- v1.23.0 - Feature: inputSets [#285](https://github.com/kevinchappell/formBuilder/pull/285)
- v1.22.1 - Bugfix: updateJSON does not set correct version [#284](https://github.com/kevinchappell/formBuilder/pull/284)
- v1.22.0 - Feature: Rows Attribute for TextArea [#282](https://github.com/kevinchappell/formBuilder/pull/282)
- v1.21.3 - Hotfix: addField index 0 without fields [#279](https://github.com/kevinchappell/formBuilder/pull/279)
- v1.21.2 - Add Build and commit to gulp tag task [#278](https://github.com/kevinchappell/formBuilder/pull/278)
- v1.21.1 - Chore: Add gulp tag task [#277](https://github.com/kevinchappell/formBuilder/pull/277)
- v1.21.0 - Feature: addField and removeField actions [#276](https://github.com/kevinchappell/formBuilder/pull/276)
- v1.20.3 - Bugfix: multi option name attribute [#274](https://github.com/kevinchappell/formBuilder/pull/274)
- v1.20.2 - Bugfix: gulp font-edit [#263](https://github.com/kevinchappell/formBuilder/pull/263)
- v1.20.1 - Bugfix: XML other option [#262](https://github.com/kevinchappell/formBuilder/pull/262)
- v1.20.0 - Feature: typeUserEvents [#260](https://github.com/kevinchappell/formBuilder/pull/260)
- v1.19.4 - Bugfix: typeUserAttrs repeated value from formData [#258](https://github.com/kevinchappell/formBuilder/pull/258)
- v1.19.3 - Feature: tel subtype [#256](https://github.com/kevinchappell/formBuilder/pull/256)
- v1.19.2 - Hotfix: Correctly escape attributes [#255](https://github.com/kevinchappell/formBuilder/pull/255)
- v1.19.1 - Hotfix: typeUserAttrs duplicate attributes [#254](https://github.com/kevinchappell/formBuilder/pull/254)
- v1.19.0 - Feature: Copy button [#252](https://github.com/kevinchappell/formBuilder/pull/252)
- v1.18.0 - Feature: typeUserAttrs [#247](https://github.com/kevinchappell/formBuilder/pull/247)
- v1.17.2 - Bugfix: Classes not saving in XML mode and option pre-select issues[#250](https://github.com/kevinchappell/formBuilder/pull/250)
- v1.17.1 - Bugfix: `clearFields` action will error if no fields on stage[#245](https://github.com/kevinchappell/formBuilder/pull/245)
- v1.17.0 - Feature: `showActionButtons` option and `showData` action[#244](https://github.com/kevinchappell/formBuilder/pull/244)
- v1.16.0 - Feature: JSON support[#237](https://github.com/kevinchappell/formBuilder/pull/237)
- v1.15.6 - Bugfix: Remove fields from `disableFields` option.[#231](https://github.com/kevinchappell/formBuilder/pull/231)
- v1.15.5 - Feature: `save` action [#228](https://github.com/kevinchappell/formBuilder/pull/228)
- v1.15.4 - Bugfix: formRender textarea value undefined [#224](https://github.com/kevinchappell/formBuilder/pull/224)
- v1.15.3 - Bugfix: Cannot run formRender on multiple elements [#223](https://github.com/kevinchappell/formBuilder/pull/223)
- v1.15.2 - Feature/Bugfix: Actions, formRender textarea `value` bugfix [#219](https://github.com/kevinchappell/formBuilder/pull/219)
- v1.15.0 - Feature/Bugfix: Allow multiple files, bugfixes [#211](https://github.com/kevinchappell/formBuilder/pull/211)
- v1.14.6 - Hotfix: set Sortable `scroll` to `false` [#206](https://github.com/kevinchappell/formBuilder/pull/206)
- v1.14.5 - Chore: Add composer.json [#207](https://github.com/kevinchappell/formBuilder/pull/207)
- v1.14.4 - Bugfix: Form not saving when fields added by click [#203](https://github.com/kevinchappell/formBuilder/pull/203)
- v1.14.3 - Bugfix/Chore: fix formRender missing bootstrap styling, updated demo [#202](https://github.com/kevinchappell/formBuilder/pull/202)
- v1.14.2 - Feature: Value attribute, improved mobile styling [#199](https://github.com/kevinchappell/formBuilder/pull/199)
- v1.14.1 - Bugfix: Option defaults not rendering [#198](https://github.com/kevinchappell/formBuilder/pull/198)
- v1.14.0 - Feature: Fast edit options. Click to add field, sticky controls, auto edit toggle [#190](https://github.com/kevinchappell/formBuilder/pull/190)
- v1.11.0 - Feature: Number input [#188](https://github.com/kevinchappell/formBuilder/pull/188)
- v1.10.6 - Bugfix: Limit scope of bootstrap helpers [#187](https://github.com/kevinchappell/formBuilder/pull/187)
- v1.10.5 - Bugfix: Other option for radio and checkbox xml attribute  [#186](https://github.com/kevinchappell/formBuilder/pull/186)
- v1.10.4 - Bugfix: Object.assign [#181](https://github.com/kevinchappell/formBuilder/pull/181)
- v1.10.3 - Bugfix: defaultFields multiple select not applied [#176](https://github.com/kevinchappell/formBuilder/pull/176)
- v1.10.2 - Bugfix: Remove role limit [#175](https://github.com/kevinchappell/formBuilder/pull/175)
- v1.10.1 - Bugfix: Removing an option causes error [#169](https://github.com/kevinchappell/formBuilder/pull/169)
- v1.10.0 - Feature: Add "Other" option to checkbox and radio group fields [#168](https://github.com/kevinchappell/formBuilder/pull/168)
- v1.9.33 - Bugfix: field close tab callback fired twice on mobile [#167](https://github.com/kevinchappell/formBuilder/pull/167)
- v1.9.32 - Bugfix: Change validators to run on blur instead of keyup [#164](https://github.com/kevinchappell/formBuilder/pull/164)
- v1.9.31 - Bugfix: Firefox loses reference to textarea [#161](https://github.com/kevinchappell/formBuilder/pull/161)
- v1.9.30 - Bugfix: Block elements missing classNames [#159](https://github.com/kevinchappell/formBuilder/pull/159)
- v1.9.28 - Bugfix: Remove polyfills causing problems in some apps [#151](https://github.com/kevinchappell/formBuilder/pull/151)
- v1.9.27 - Bugfix: Header subtypes [#136](https://github.com/kevinchappell/formBuilder/pull/136)
- v1.9.26 - Bugfix: saved subtypes not rendering [#134](https://github.com/kevinchappell/formBuilder/pull/134)
- v1.9.25 - Bugfix: Standardizes how field variables are processed from xml, defaultfields and new field sources [#129](https://github.com/kevinchappell/formBuilder/pull/129)
- v1.9.24 - Bugfix: Update internal field id to better handle multiple editors [#126](https://github.com/kevinchappell/formBuilder/pull/126)
- v1.9.23 - Bugfix: editing class attribute is wonky [#122](https://github.com/kevinchappell/formBuilder/pull/122)
- v1.9.22 - Feature: `controlOrder` option. [#118](https://github.com/kevinchappell/formBuilder/pull/118)
- v1.9.21 - Bugfix: Add pull left and right to  `_bs.scss`
- v1.9.20 - Feature: sortableFields #114
- v1.9.19
  - Feature: controlPosition option #114
  - Feature: sortableFields option #114
- v1.9.18 - Bugfix: Button variables not processed from XML #113
- v1.9.17 - Bugfix: Umlauts break XML #112
- v1.9.16 - Bugfix: XML parse issue [#110](https://github.com/kevinchappell/formBuilder/pull/110)
- v1.9.15 - Bugfix: Option character encoding problem [#109](https://github.com/kevinchappell/formBuilder/pull/109)
- v1.9.14 -
  - Feature: Header and Paragraph tags [#108](https://github.com/kevinchappell/formBuilder/pull/108)
  - Bugfix: button classes, special character encoding, renamed functions for Selenium
  - Chore: added/updated comments [#106](https://github.com/kevinchappell/formBuilder/pull/106)
- v1.9.13 - Bugfix: Add `defaultFields` to formData [#103](https://github.com/kevinchappell/formBuilder/pull/103)
- v1.9.12 - Feature: disableFields option, formRender jQuery fallback, formSaved Event [#101](https://github.com/kevinchappell/formBuilder/pull/101)
- v1.9.11 - Bugfix: formRender hidden field issue [#100](https://github.com/kevinchappell/formBuilder/pull/100)
- v1.9.10 - Bugfix: formRender not rendering with containers [#98](https://github.com/kevinchappell/formBuilder/pull/98)
- v1.9.9 - Bugfix: formRender reinit, take regular js object [#97](https://github.com/kevinchappell/formBuilder/pull/97)
- v1.9.8 - Bugfix: Enter toggles XML field [#95](https://github.com/kevinchappell/formBuilder/pull/95)
- v1.9.7 - Bugfix: Radio group and checkbox group not rendered correctly in IE [#93](https://github.com/kevinchappell/formBuilder/pull/93)
- v1.9.6 - Bugfix: Arrows functions don't work with arguments.callee [#92](https://github.com/kevinchappell/formBuilder/pull/92)
- v1.9.5 - Bugfix: IE Element.remove() polyfill [#91](https://github.com/kevinchappell/formBuilder/pull/91)
- v1.9.4 - Bugfix: IE compatibility issues [#90](https://github.com/kevinchappell/formBuilder/pull/90)
- v1.9.3 - Bugfix: Update .jshintrc [#89](https://github.com/kevinchappell/formBuilder/pull/89)
- v1.9.2 - Bugfix: remove CustomEvent, no IE support [#88](https://github.com/kevinchappell/formBuilder/pull/88)
- v1.9.1 - Bugfix: invalid package.json [#86](https://github.com/kevinchappell/formBuilder/pull/86)
- v1.9.0 - Feature: Style and data updates, Class attribute [#85](https://github.com/kevinchappell/formBuilder/pull/85)
- v1.8.2 - Bugfix: Radio group preview [#82](https://github.com/kevinchappell/formBuilder/pull/82)
- v1.8.1 - Feature: File upload element [#80](https://github.com/kevinchappell/formBuilder/pull/80)
- v1.8.0 - Feature: Button element [#79](https://github.com/kevinchappell/formBuilder/pull/79)
- v1.7.10 - Bugfix: stringify bug causing `null` to be 'null'
- v1.7.9 -
  - Add options to formRender
    + `render` : defaults to `true`, will not render the html fields if set false.
    + `notify` : Allows you to define your own handler for notifications. defaults to console.log, console.warn and console.error.
  - Set form field data to template element to be used by other modules.
- v1.7.8 - Add fontello fonts with config and Makefile for editing icons.
- v1.7.7
  - Bugfix: Close button doesn't close #71
  - Bugfix: max-length attribute should be maxlength #70
  - Chore: Add gulp plumber to build process to catch errors instead of fail build.
- v1.7.6 - Bugfix: radio and checkbox group options without values cause formRender error.
- v1.7.5
  - Bugfix: Multiple selection bug for checkbox group and radio group fields. [#66](https://github.com/kevinchappell/formBuilder/pull/66)
  - Chore: Refactor build process, Add linter and code style settings, formRender santized attributes [#67](https://github.com/kevinchappell/formBuilder/pull/67)
- v1.7.4 - Feature: Multiple selection. See: [#65](https://github.com/kevinchappell/formBuilder/pull/65)
- v1.7.3 - Feature: Mobile support for touch based drag and drop. See: [#64](https://github.com/kevinchappell/formBuilder/pull/64)
- v1.7.2 - Bugfix/Feature: Added placeholder attribute for `text` and `textarea` fields. See: [#63](https://github.com/kevinchappell/formBuilder/pull/63)
- v1.7.1 - Bugfix/Feature: Added reinitialization to formBuilder. See: [#62](https://github.com/kevinchappell/formBuilder/pull/62)
- v1.7.0 - Feature: Added sub-types to the `text` input for `password`, `color`, and `email` html5 inputs.
- v1.6.8 - Bugfix: Description and required not rendered in formRender
- v1.6.7 - Bugfix: fields are not sortable
- v1.6.6 - Bugfix: change should be triggered when hidden textarea updated
- v1.6.5 - Feature: Make rendered fields targetable
- v1.6.4 - Bugfix: User options should be deep copied with `$.extend`
- v1.6.3 - Bugfix: Remove `max-length` attribute for hidden fields, Update preview and label for `textarea`
- v1.6.2 - Bugfix: Option text not rendered in IE #39
- v1.6.1 - Bugfix: required attribute should not be rendered when false.
- v1.6.0 - Feature: Hidden input field type added
- v1.5.4 - update gulp to autopush tags
- v1.5.3 - Bugfix: multiple formBuilder on one page.
- v1.5.2 - Bugfix: formRender radio-group invalid name property
- v1.5.1 - Bugfix: Add minimal Bootstrap styling for `formRender`
- v1.5 - Feature: checkbox inputs can now be made into toggle switch. [details here](https://github.com/kevinchappell/formBuilder/pull/24)
- v1.4.0 - Feature: `formRender` is a companion plugin to render saved formData into a usable form. [details here](https://github.com/kevinchappell/formBuilder/pull/20)
- v1.3.5 - Bugfix: XML parse and save
  + This fix brings a slight update in XML markup for multiple value fields, specifically the `<option>` node. The changes is to move away from the proprietary XML parser formBuilder was made for.

  **This**:
  ```
  <field name="checkbox-group-1" label="Checkbox Group" style="multiple" required="false" type="checkbox-group" >
      <option label="Option 1">option-1</option>
      <option label="Option 2">option-2</option>
    </field>
  ```
  **Becomes**:
  ```
  <field name="checkbox-group-1" label="Checkbox Group" style="multiple" required="false" type="checkbox-group" >
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
    </field>
  ```
- v1.3.4 - Bugfix: fix self closing xml for radio-group field
- v1.3.3 - Bugfix: preview not toggling correctly
- v1.3.2 - Bugfix: preview for Multiple fields not updating
- v1.3.1 - Bugfix: multiple value fields not saving XML
- v1.3.0 - Live previews, icon font
- v1.2.0 - Add default fields, and call-to-action text
