import { Button, Card, Form } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ApiService } from '../api/ApiService'
import { Step } from '../types/Types'
import { render } from './Render'

type Props = {
  stepsLength: number
  step: Step
  current: number
  setCurrent: (current: number) => void
}

export default function FormStep({ stepsLength, step, current, setCurrent }: Props) {
  const navigate = useNavigate()

  const api = new ApiService()

  const onFinish = (values: any) => {
    console.log('values:', values)
    if (step.url === 'next') {
      setCurrent(current + 1)
      return
    }
    if (step.url !== 'next') {
      api.post(step.url, values).then((response) => {
        console.log('response:', response)
        if (current < stepsLength - 1) {
          setCurrent(current + 1)
        }
        if (current === stepsLength - 1) {
          navigate('/result')
        }
      })
    }
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

        {current > 0 && (
          <Form.Item>
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          </Form.Item>
        )}
      </Card>
    </Form>
  )
}
