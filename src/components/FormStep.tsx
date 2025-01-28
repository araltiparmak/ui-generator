import { Card, Flex, Form } from 'antd'
import { useNavigate } from 'react-router-dom'

import { ApiService } from '../api/ApiService'
import { Step } from '../types/Types'
import { render } from './Render'
import { BackButton } from './BackButton.tsx'
import { SubmitButton } from './atoms/SubmitButton.tsx'

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
      <Card size="small" title={step.title}>
        {render(step.fields)}
        <div style={{ marginTop: '10px' }}>
          <Flex gap="small" justify={'flex-end'}>
            {current > 0 && <BackButton onClick={() => setCurrent(current - 1)} />}

            <SubmitButton />
          </Flex>
        </div>
      </Card>
    </Form>
  )
}
