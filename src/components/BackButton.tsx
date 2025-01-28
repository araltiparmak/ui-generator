import { Button, Form } from 'antd'

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Form.Item>
      <Button onClick={onClick}>Previous</Button>
    </Form.Item>
  )
}
