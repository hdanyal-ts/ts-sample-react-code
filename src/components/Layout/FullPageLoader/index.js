import React from 'react'
import {
  LoadingContainer,
  LoadingContentContainer,
  LoadingLabel,
  Spinner
} from './styles'

function FullPageLoader () {
  return (
    <LoadingContainer>
      <LoadingContentContainer>
        <Spinner />
        <LoadingLabel>Loading</LoadingLabel>
      </LoadingContentContainer>
    </LoadingContainer>
  )
}

export default FullPageLoader
