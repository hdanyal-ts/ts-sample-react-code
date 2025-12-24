import React from 'react'
import { LabelContainer, MessageContainer, MessageLabel } from './styles'

function FullPageMessage ({ id, message }) {
  return (
    <MessageContainer id={id}>
      <LabelContainer>
        <MessageLabel>{message}</MessageLabel>
      </LabelContainer>
    </MessageContainer>
  )
}

export default FullPageMessage
