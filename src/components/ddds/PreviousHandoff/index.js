import React from 'react'
import InformationSection from './Sections/InformationSection'
import { composePrevHandoffProps } from '@utils/dataUtils'
import { ContentContainer } from './styles'
import { DetailSection, SummarySection } from './Sections'

function PreviousHandoffContent ({ handoff, isSummary }) {
  const isOperator = handoff?.isOperator
  const positionName = handoff.positionName
  const handoffInformation = handoff.sections[0].cards[0]
  const sections = handoff.sections.filter(item => item.type !== 'INF')
  const sectionsDetailed = sections.map(composePrevHandoffProps(positionName))

  const handoffContent = isSummary
    ? <SummarySection sections={sectionsDetailed} />
    : <DetailSection sections={sectionsDetailed} />

  return (
    <ContentContainer>
      <InformationSection
        handoffInformation={handoffInformation}
        isOperator={isOperator}
      />
      {handoffContent}
    </ContentContainer>
  )
}

export default PreviousHandoffContent
