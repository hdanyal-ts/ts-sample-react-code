import React from 'react'
import { getHuddleBoardLayout } from '@components/Layout'
import useDataVisibility from '@hooks/useDataVisibility'
import KPIReport from '@components/ddds/KPI'
import { HuddleBoardWrapper } from '@components/Layout/styles'
import FullPageMessage from '@components/Layout/FullPageMessage'
import { GET_KPI } from '@public/data/sample'

export async function getStaticProps () {
  const title = 'SPEC LINE'
  const date = 'OCT 24, 2023 | TUE'
  const data = GET_KPI
  return { props: { title, date, data } }
}
export default function HuddleBoardKPIPage ({ data }) {
  const { isContentVisible } = useDataVisibility()

  if (data.kpis.length === 0) {
    const message = 'Unable to locate previous handoff KPI for this position.'
    return <FullPageMessage id='missing-kpi-message' message={message} />
  }

  return (
    <HuddleBoardWrapper id='kpi'>
      <KPIReport kpis={data.kpis} isContentVisible={isContentVisible} />
    </HuddleBoardWrapper>
  )
}

HuddleBoardKPIPage.getLayout = getHuddleBoardLayout
