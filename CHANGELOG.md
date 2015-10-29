# Changelog

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
