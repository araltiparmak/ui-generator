import { Steps } from 'antd'
import React, { useState } from 'react'

import mockdata from '../mock-data/ui.json'
import { Types } from '../types/Types'
import FormStep from './FormStep'

export default function UIGenerator() {
  const data: Types = JSON.parse(JSON.stringify(mockdata))

  const [current, setCurrent] = useState(0)

  const items = data.steps.map((item, index) => ({
    key: item.title,
    title: item.title,
    content: (
      <FormStep
        stepsLength={data.steps.length}
        step={data.steps[index]}
        current={current}
        setCurrent={setCurrent}
      />
    ),
  }))

  return (
    <>
      <Steps current={current} items={items} />
      <div style={{ marginTop: 20 }}>{items[current].content}</div>
    </>
  )
}
