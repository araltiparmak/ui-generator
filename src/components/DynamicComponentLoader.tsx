import { useEffect, useState } from 'react'

import { Field } from '../types/Types'
import { FieldHolder } from './FieldHolder'

export default function DynamicComponentLoader(props: { field: Field }): JSX.Element {
  const [dynamicComponent, setDynamicComponent] = useState()

  useEffect(() => {
    import(`./${props.field.type}`).then((component) => {
      setDynamicComponent(component.default)
    })
  }, [])

  return (
    <FieldHolder key={props.field.name} field={props.field}>
      {dynamicComponent}
    </FieldHolder>
  )
}
