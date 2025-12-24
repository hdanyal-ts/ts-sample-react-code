import React, { useState, useEffect } from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import PositionTabs from '@components/Buttons/PositionTabs'
import EN_LABELS from '@public/content/english'
import PreviousHandoffContent from '@components/ddds/PreviousHandoff'
import { GET_PREVIOUS_HANDOFF } from '@public/data/sample'
import {
  HeaderButton,
  HeaderContainer,
  HeaderLabel,
  PreviousContainer
} from '@components/ddds/PreviousHandoff/styles'
import { formatHeader } from '@utils/format'
import FullPageMessage from '@components/Layout/FullPageMessage'

export async function getStaticProps () {
  const title = EN_LABELS['app.ddds.handoff.previous.title']
  const data = GET_PREVIOUS_HANDOFF
  return { props: { title, data } }
}
export default function PreviousHandoffPage ({ title, data }) {
  const [previousHandoffs, setPreviousHandoffs] = useState([])
  const [summaryVisible, setSummaryVisible] = useState(true)

  const onToggleView = () => setSummaryVisible(!summaryVisible)

  useEffect(() => {
    setPreviousHandoffs(data.handoffs)
  }, [data])

  if (previousHandoffs.length === 0) {
    const message = 'No previous handoffs submitted for selected position(s).'
    return (
      <PageWrapper id='previous-handoff' title={title} icon='ArrowLeft'>
        <FullPageMessage id='missing-previous-handoff' message={message} />
      </PageWrapper>
    )
  }

  const handoff = previousHandoffs[0]
  const handoffFound = handoff.sections.length > 0

  const summaryLabel = EN_LABELS['app.ddds.handoff.previous.summary']
  const detailedLabel = EN_LABELS['app.ddds.handoff.previous.detailed']
  const visibleLabel = summaryVisible ? summaryLabel : detailedLabel
  const position = formatHeader(handoff.positionName)
  const headerTitle = `${EN_LABELS['app.ddds.handoff.previous.title']} (${visibleLabel}): ${position}`
  const buttonViewType = !summaryVisible
    ? summaryLabel.toUpperCase()
    : detailedLabel.toUpperCase()
  const buttonLabel = `${EN_LABELS[
    'app.ddds.handoff.previous.view'
  ].toUpperCase()} ${buttonViewType}`

  return (
    <PageWrapper id='previous-handoff' title={title} icon='ArrowLeft'>
      <PreviousContainer>
        <PositionTabs />
        {handoffFound && (
          <HeaderContainer>
            <HeaderLabel id='handoff-header'>{headerTitle}</HeaderLabel>
            <HeaderButton id='handoff-view-button' onClick={onToggleView}>
              {buttonLabel}
            </HeaderButton>
          </HeaderContainer>
        )}
        <PreviousHandoffContent handoff={handoff} isSummary={summaryVisible} />
      </PreviousContainer>
    </PageWrapper>
  )
}

PreviousHandoffPage.getLayout = getSidebarLayout
