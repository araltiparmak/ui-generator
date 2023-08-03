import { Button, Card, Form } from 'antd'
import React from 'react'

import { Step } from '../types/Types'
import { render } from './Render'

type Props = {
  stepsLength: number
  step: Step
  current: number
  setCurrent: (current: number) => void
}

export default function FormStep({ stepsLength, step, current, setCurrent }: Props) {
  const onFinish = (values: any) => {
    console.log(values)

    fetch(step.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response
      })
      .then((data) => {
        console.log('Data:', data)

        if (current < stepsLength - 1) {
          setCurrent(current + 1)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name={step.name}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Card title={step.title}>
        {render(step.fields)}
        <Form.Item style={{ marginTop: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </Form.Item>
      </Card>
    </Form>
  )
}
