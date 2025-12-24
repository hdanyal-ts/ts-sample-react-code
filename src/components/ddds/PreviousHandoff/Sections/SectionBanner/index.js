import React from 'react'
import { colors } from '@design/colors'
import {
  SectionBadge,
  SectionContainer,
  BannerContainer,
  SectionLabel,
  SectionLabelContainer,
  SummaryBadge
} from './styles'

function SectionBanner (props) {
  const { badge, label, summary } = props
  const { borderColor, backgroundColor } = props
  const textColor = borderColor === colors.yellow ? colors.black : colors.white
  return (
    <SectionContainer>
      <BannerContainer bgcolor={backgroundColor} bordercolor={borderColor}>
        <SectionBannerLabel badge={badge} color={borderColor} label={label} />
        {summary && (
          <SummaryBadge bgcolor={borderColor} color={textColor}>
            {summary}
          </SummaryBadge>
        )}
      </BannerContainer>
    </SectionContainer>
  )
}
function SectionBannerLabel ({ badge, color, label }) {
  const textColor = color === colors.yellow ? colors.black : colors.white
  return (
    <SectionLabelContainer>
      {badge && (
        <SectionBadge bgcolor={color} color={textColor}>
          {badge}
        </SectionBadge>
      )}
      <SectionLabel>{label}</SectionLabel>
    </SectionLabelContainer>
  )
}

export default SectionBanner
