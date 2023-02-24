import { Button, Form, Input, InputNumber, Switch } from 'antd'

import mockdata from '../mock-data/ui.json'
import { Types, Field } from '../types/Types'

export default function UIGenerator() {
  const data: Types = JSON.parse(JSON.stringify(mockdata))
  const form = data.forms[0]
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name={form.name}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {render(form.fields)}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

function render(fields: Field[]) {
  return fields.map((field) => {
    if (field.type === 'string') {
      return (
        <Form.Item key={field.name} name={field.name} label={field.label} >
          <Input placeholder={field.placeholder} />
        </Form.Item>
      )
    } else if (field.type === 'number') {
      return (
        <Form.Item key={field.name} name={field.name} label={field.label}>
          <InputNumber placeholder={field.placeholder} />
        </Form.Item>
      )
    } else if (field.type === 'boolean') {
      return (
        <Form.Item key={field.name} name={field.name} label={field.label}>
          <Switch />
        </Form.Item>
      )
    }
  })
}
