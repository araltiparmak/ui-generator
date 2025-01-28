import { Button, Form } from 'antd'

export const SubmitButton = () => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  )
}
