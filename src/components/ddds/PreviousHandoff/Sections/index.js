import React from 'react'
import SectionBanner from './SectionBanner'
import SectionContent from './SectionContent'
import { DetailContainer, SectionContainer, SummaryContainer } from './styles'

export function SummarySection ({ sections }) {
  return (
    <SummaryContainer id='summary-section'>
      {sections.map((item, index) => (
        <SectionBanner key={index} {...item} />
      ))}
    </SummaryContainer>
  )
}
export function DetailSection ({ sections }) {
  return (
    <DetailContainer id='detail-section'>
      {sections.map((section, index) => (
        <DetailSectionItem key={index} section={section} />
      ))}
    </DetailContainer>
  )
}
function DetailSectionItem ({ section }) {
  return (
    <>
      <SectionBanner {...section} />
      <SectionContainer>
        <SectionContent section={section} />
      </SectionContainer>
    </>
  )
}
