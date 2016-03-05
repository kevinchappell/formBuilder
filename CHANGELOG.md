# Changelog

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
