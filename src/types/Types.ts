export type Types = {
  steps: Step[]
}

export type Step = {
  fields: Field[]
  name: string
  title: string
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
type Option = {
  value: string
  label: string
}

export type FieldType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'checkbox'
  | 'select'
  | 'section'
