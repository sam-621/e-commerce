import { ChangeEvent, useState } from 'react'

export type inputType = 'text' | 'password' | 'email'

export const useField = (type: inputType, label: string, id: string) => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
    type,
    label,
    id,
  }
}
