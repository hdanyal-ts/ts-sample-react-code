import React, { useState } from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import { TableContainer } from '@components/Table'
import {
  LiveScheduleTable,
  SECTIONS
} from '@components/Table/LiveSchedule'
import TextTabs from '@components/Buttons/TextTabs'
import EN_LABELS from '@public/content/english'
import { GET_LIVE_SCHEDULE } from '@public/data/sample'

export async function getStaticProps () {
  const title = EN_LABELS['app.ops.live-schedule.title']
  const schedule = GET_LIVE_SCHEDULE
  return { props: { title, schedule } }
}
export default function LiveSchedulePage ({ title, schedule }) {
  const [activeSection, setActiveSection] = useState(0)
  const section = SECTIONS[activeSection].toLowerCase()
  const activeSchedule = schedule[section].schedule
  return (
    <PageWrapper id='live-schedule' title={title}>
      <TableContainer>
        <TextTabs
          labels={SECTIONS}
          active={activeSection}
          onClickLabel={setActiveSection}
        />
        <LiveScheduleTable schedule={activeSchedule} />
      </TableContainer>
    </PageWrapper>
  )
}

LiveSchedulePage.getLayout = getSidebarLayout
