import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
function ResultPage() {
  const navigate = useNavigate()

  return (
    <Result
      status="success"
      title="Successfully sent the form!"
      extra={[
        <Button type="primary" key="console">
          Go to the Console
        </Button>,
        <Button onClick={() => navigate('/')}>Fill the form again</Button>,
      ]}
    />
  )
}

export default ResultPage
