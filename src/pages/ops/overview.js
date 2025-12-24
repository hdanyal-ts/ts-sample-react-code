import React, { useState } from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import { PrimaryButton } from '@components/Buttons'
import { useRouter } from 'next/router'
import { CenterlineTable } from '@components/Table/CenterlineTable'
import { CenterlineContainer } from '@components/Table/CenterlineTable/styles'
import PositionTabs from '@components/Buttons/PositionTabs'
import { TableContainer } from '@components/Table'
import TextTabs from '@components/Buttons/TextTabs'
import EN_LABELS from '@public/content/english'
import { GET_SETPOINTS } from '@public/data/sample'
import useActiveTimesheet from '@hooks/useActiveTimesheet'

export async function getStaticProps () {
  const title = EN_LABELS['app.ops.overview.title']
  const data = GET_SETPOINTS
  return { props: { title, data } }
}
export default function CenterlineOverviewPage ({ title, data }) {
  const [activeSection, setActiveSection] = useState(0)
  const router = useRouter()
  const { timesheet } = useActiveTimesheet()

  const onNavigateDeviation = () => router.push('/ops/deviation/history')
  const positionAreas = timesheet.positions[0].assets.map(item => item.name)
  const activePosition = positionAreas[activeSection]
  const activeSetpoints = data[activePosition].data.setpoints

  const deviationButton = (
    <PrimaryButton
      id='deviation-history-button'
      label={EN_LABELS['app.default.button.deviation-history']}
      onClick={onNavigateDeviation}
    />
  )

  return (
    <PageWrapper id='overview' title={title} component={deviationButton}>
      <CenterlineContainer>
        <PositionTabs />
        {activeSetpoints.measurements.length > 0 && (
          <TableContainer>
            <TextTabs
              labels={positionAreas}
              active={activeSection}
              onClickLabel={setActiveSection}
            />
            <CenterlineTable setpoints={activeSetpoints} />
          </TableContainer>
        )}
      </CenterlineContainer>
    </PageWrapper>
  )
}

CenterlineOverviewPage.getLayout = getSidebarLayout
