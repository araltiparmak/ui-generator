export type Types = {
  steps: Step[]
}

export type Step = {
  fields: Field[]
  name: string
  title: string
  url: string
}

export type Field = {
  name: string
  label: string
  type: FieldType
  required: boolean
  requiredMessage?: string
  placeholder?: string
  fields?: Field[]
  options?: Option[]
}

export type RenderedElement = JSX.Element[] | JSX.Element | null

export type FieldType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'checkbox'
  | 'select'
  | 'section'

type Option = {
  value: string
  label: string
}
