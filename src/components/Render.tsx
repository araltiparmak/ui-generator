import { Checkbox, Input, InputNumber, Select, Switch } from 'antd'
import React from 'react'

import { Field, RenderedElement } from '../types/Types'
import { FieldHolder } from './FieldHolder'

export function render(fields: Field[]): RenderedElement[] {
  return fields.map((field) => {
    switch (field.type) {
      case 'string':
        return (
          <FieldHolder key={field.name} field={field}>
            <Input placeholder={field.placeholder} />
          </FieldHolder>
        )
      case 'number':
        return (
          <FieldHolder key={field.name} field={field}>
            <InputNumber placeholder={field.placeholder} />
          </FieldHolder>
        )
      case 'boolean':
        return (
          <FieldHolder key={field.name} field={field}>
            <Switch />
          </FieldHolder>
        )
      case 'checkbox':
        return (
          <FieldHolder key={field.name} field={field}>
            <Checkbox>Checkbox</Checkbox>
          </FieldHolder>
        )
      case 'select':
        return (
          <FieldHolder key={field.name} field={field}>
            <Select options={field.options} defaultValue={field.options?.[0]} />
          </FieldHolder>
        )
      case 'section':
        return render(field.fields || []) as RenderedElement
      default:
        return null
    }
  })
}
