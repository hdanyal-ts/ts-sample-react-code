import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import PositionTabs from '@components/Buttons/PositionTabs'
import EN_LABELS from '@public/content/english'

export async function getStaticProps () {
  const title = EN_LABELS['app.ddds.handoff.current.title']
  return { props: { title } }
}
export default function CurrentHandoffPage ({ title }) {
  return (
    <PageWrapper id='current-handoff' title={title} icon='ArrowRight'>
      <PositionTabs />
    </PageWrapper>
  )
}

CurrentHandoffPage.getLayout = getSidebarLayout
