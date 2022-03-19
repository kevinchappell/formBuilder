import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { CheckboxAttributes } from 'types/formbuilder-types'
import { boolAttribute } from './bool'

export const accessAttributes = (type, values, fb: FormBuilderClass) => {
  const roles = values.role !== undefined ? values.role.split(',') : []
  const rolesDisplay = values.role ? 'style="display:block"' : ''
  const availableRoles = [`<div class="available-roles" ${rolesDisplay}>`]

  for (let key in fb.opts.roles) {
    if (fb.opts.roles.hasOwnProperty(key)) {
      const roleId = `fld-${fb.data.lastID}-roles-${key}`
      const cbAttrs: CheckboxAttributes = {
        type: 'checkbox-group',
        name: 'roles[]',
        value: key,
        id: roleId,
        className: 'roles-field',
      }
      if (roles.includes(key)) {
        cbAttrs.checked = 'checked'
      }

      availableRoles.push(`<label for="${roleId}">`)
      availableRoles.push(fb.h.input(cbAttrs).outerHTML)
      availableRoles.push(` ${fb.opts.roles[key]}</label>`)
    }
  }

  availableRoles.push('</div>')

  const accessLabels = {
    first: mi18n.get('roles'),
    second: mi18n.get('limitRole'),
    content: availableRoles.join(''),
  }

  return boolAttribute('access', values, accessLabels, fb)
}
