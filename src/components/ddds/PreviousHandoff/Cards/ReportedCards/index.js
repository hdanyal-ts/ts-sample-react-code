import React from 'react'
import { Icon } from '@components/Icon'
import { CIDCard, DefaultCard, DefectCard, DeviationCard, StopCard } from '..'
import {
  ComponentHeader,
  EmptyIconContainer,
  EmptyReportedContainer,
  EmptyReportedLabel
} from './styles'
import { CardsContainer } from '../../Sections/SectionContent/styles'
import { colors } from '@design/colors'
import { Column } from '../../../../Layout/styles'

const REPORTED_CARD_TITLES = {
  CLD: 'Reported Centerline Deviations',
  SFT: 'Reported Safety Issues',
  EQS: 'Total Equipment Stops',
  EQD: 'Reported Equipment Defects'
}
function ReportedCards ({ item, section }) {
  const title = REPORTED_CARD_TITLES[section] ?? ''
  const showTitle = title !== ''
  const gap = section === 'CID' ? '0.15rem' : '2rem'
  const responseId = item.id
  const cards = item.cards
  const cardComponents =
    cards?.length === 0 || cards === undefined
      ? <NoneReported />
      : cards?.map(composeReportCard({ responseId, section }))

  return (
    <Column>
      {showTitle && <ComponentHeader>{title}</ComponentHeader>}
      <CardsContainer gap={gap}>
        {cardComponents}
      </CardsContainer>
    </Column>
  )
}
export function NoneReported () {
  return (
    <EmptyReportedContainer>
      <EmptyIconContainer color={colors.mediumGrey}>
        <Icon icon='Block' color={colors.white} />
      </EmptyIconContainer>
      <EmptyReportedLabel>0 Reported</EmptyReportedLabel>
    </EmptyReportedContainer>
  )
}
function composeReportCard ({ responseId, section }) {
  return (report, index) => {
    const key = `${responseId}-${index}`
    switch (section) {
      case 'CID':
        return <CIDCard isComplete={report.isComplete} title={report.label} />
      case 'CLD':
        return <DeviationCard key={key} report={report} />
      case 'EQS':
        return <StopCard key={key} report={report} />
      case 'EQD':
        return <DefectCard key={key} report={report} />
      default:
        return (
          <DefaultCard
            key={key}
            report={report}
            responseId={responseId}
            section={section}
          />
        )
    }
  }
}

export default ReportedCards
