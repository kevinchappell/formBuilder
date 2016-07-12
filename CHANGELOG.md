# Changelog

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
