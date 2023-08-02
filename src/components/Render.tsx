import { Checkbox, Input, InputNumber, Select, Switch } from 'antd'
import React from 'react'

import { Field, RenderedElement } from '../types/Types'
import { FieldHolder } from './FieldHolder'

export function render(fields: Field[]): RenderedElement[] {
  return fields.map((field) => {
    if (field.type === 'string') {
      return (
        <FieldHolder key={field.name} field={field}>
          <Input placeholder={field.placeholder} />
        </FieldHolder>
      )
    }
    if (field.type === 'number') {
      return (
        <FieldHolder key={field.name} field={field}>
          <InputNumber placeholder={field.placeholder} />
        </FieldHolder>
      )
    }
    if (field.type === 'boolean') {
      return (
        <FieldHolder key={field.name} field={field}>
          <Switch />
        </FieldHolder>
      )
    }
    if (field.type === 'checkbox') {
      return (
        <FieldHolder key={field.name} field={field}>
          <Checkbox>Checkbox</Checkbox>
        </FieldHolder>
      )
    }
    if (field.type === 'select') {
      return (
        <FieldHolder key={field.name} field={field}>
          <Select options={field.options} defaultValue={field.options?.[0]} />
        </FieldHolder>
      )
    }
    if (field.type === 'section' && field.fields) {
      return render(field.fields) as RenderedElement
    }
    return null
  })
}
