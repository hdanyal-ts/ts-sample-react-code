import React from 'react'
import { ComponentHeader, Input, TextInputWrapper } from './styles'
import { InputLabel, InputWrapper, NumberBadge } from '../../../Layout/styles'

export function Header ({ title }) {
  return <ComponentHeader>{title}</ComponentHeader>
}
export function TextInput (props) {
  const { label, response } = props
  const isCommentLabel = label.includes('comment')
  const title = isCommentLabel ? '' : label
  const value = response && response !== '' ? response : 'N/A'
  return (
    <InputWrapper>
      <InputLabel>{title}</InputLabel>
      <TextInputWrapper>
        <Input type='text' disabled value={value} />
        {props.badge && <NumberBadge>{props.badge}</NumberBadge>}
      </TextInputWrapper>
    </InputWrapper>
  )
}
