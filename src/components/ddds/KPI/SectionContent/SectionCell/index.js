import React from 'react'
import { ResponseContainer, ResponseLabel } from '../SectionResponse/styles'

function SectionCell (props) {
  const { bgColor, color, fontSize, isBold, label } = props
  const style = props?.style ?? {}
  const badge = props?.badge ?? ''
  const formatLabel = label === 'N/A' ? '' : label
  return (
    <ResponseContainer
      $bold={isBold}
      $color={color}
      $bgcolor={bgColor}
      $fontsize={fontSize}
      style={style}
    >
      <ResponseLabel>{formatLabel}</ResponseLabel>
      {badge && <ResponseLabel $isbadge>{badge}</ResponseLabel>}
    </ResponseContainer>
  )
}

export default SectionCell
