import React from 'react'
import Select from 'react-select'
import { InputContainer, TextHeader, TextInput } from './styles'
import EN_LABELS from '@public/content/english'

export const CAUSE_OPTIONS = [
  { label: 'Charging', value: 'Charging' },
  { label: 'Fan Speed', value: 'Fan Speed' },
  { label: 'Fitting', value: 'Fitting' },
  { label: 'Low Pressure', value: 'Low Pressure' },
  { label: 'Other', value: 'Other' },
  { label: 'Voltage', value: 'Voltage' },
  { label: 'Water Heating', value: 'Water Heating' }
]
export const JUSTIFICATION_OPTIONS = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
]

export function FormInput (props) {
  const { disabled, label, onChange, value, placeholder } = props
  const defaultPlaceholder = 'app.default.form.please-complete'
  return (
    <InputContainer id='form-input'>
      <TextHeader className='form-input-label'>{EN_LABELS[label]}</TextHeader>
      <TextInput
        className='form-input-text'
        type='text'
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={EN_LABELS[placeholder ?? defaultPlaceholder]}
      />
    </InputContainer>
  )
}
export function FormDropdown (props) {
  const { label, onChange, options, placeholder, value } = props
  return (
    <InputContainer>
      <TextHeader>{EN_LABELS[label]}</TextHeader>
      <Select
        closeMenuOnSelect={false}
        placeholder={EN_LABELS[placeholder]}
        options={options}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  )
}
