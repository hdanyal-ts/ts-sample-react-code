import React from 'react'
import { Badge } from './styles'

function SectionBadge ({ bgColor, color, label }) {
  return (
    <Badge id='kpi-section-badge' $color={color} $bgcolor={bgColor}>
      {label.charAt(0)}
    </Badge>
  )
}

export default SectionBadge
