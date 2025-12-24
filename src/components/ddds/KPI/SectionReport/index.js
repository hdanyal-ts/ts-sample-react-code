import React from 'react'
import { colors } from '@design/colors'
import SectionBadge from '../SectionBadge'
import SectionContent from '../SectionContent'
import { SectionContainer, SectionHeader, SectionWrapper } from './styles'

function SectionReport (props) {
  const { label, bgColor, metrics, section, headers, isContentVisible } = props
  const color = composeSectionColor(bgColor)
  return (
    <SectionWrapper id='kpi-section-report'>
      <SectionBadge color={color} bgColor={bgColor} label={label} />
      <SectionContainer>
        <SectionHeader
          id='kpi-section-header'
          $color={color}
          $bgcolor={bgColor}
        >
          {label}
        </SectionHeader>
        <SectionContent
          color={color}
          bgColor={bgColor}
          headers={headers}
          metrics={metrics}
          section={section}
          isContentVisible={isContentVisible}
        />
      </SectionContainer>
    </SectionWrapper>
  )
}
function composeSectionColor (bgColor) {
  const isLight = bgColor === colors.yellow || bgColor === colors.blueTertiary
  return isLight ? colors.black : colors.white
}

export default SectionReport
