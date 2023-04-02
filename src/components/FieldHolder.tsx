import { Form } from 'antd'
import React from 'react'

import { Field } from '../types/Types'

type FieldProps = {
  field: Field
  children: React.ReactNode
}

export function FieldHolder(fieldProps: FieldProps) {
  return (
    <Form.Item
      name={fieldProps.field.name}
      label={fieldProps.field.label}
      rules={[
        {
          required: fieldProps.field.required,
          message: fieldProps.field.requiredMessage,
        },
      ]}
    >
      {fieldProps.children}
    </Form.Item>
  )
}
