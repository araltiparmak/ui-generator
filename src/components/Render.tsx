import { Card, Checkbox, Input, InputNumber, Select, Switch } from 'antd'

import { Field, RenderedElement } from '../types/Types'
import DynamicComponentLoader from './DynamicComponentLoader'
import { FieldHolder } from './FieldHolder'

export function render(fields: Field[]): RenderedElement[] {
  return fields.map((field) => {
    switch (field?.type) {
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
        return (
          <Card size="small" type="inner" title={field.title}>
            {render(field.fields || []) as RenderedElement}
          </Card>
        )
      default:
        return <DynamicComponentLoader field={field} />
    }
  })
}
