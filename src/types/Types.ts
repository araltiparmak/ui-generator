export type Types = {
  forms: Form[]
}

export type Form = {
  fields: Field[]
  name: string
}

export type Field = {
  name: string
  label: string
  type: FieldType
  required: boolean
  placeholder?: string
}

export type FieldType = 'string' | 'number' | 'boolean'
