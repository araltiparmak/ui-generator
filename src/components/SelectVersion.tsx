//create react component
import { Select } from 'antd'

export default function SelectVersion() {
  const options = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ]
  return <Select options={options} defaultValue={options?.[0]} />
}
