import React, { useState } from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import { Heading1 } from '@components/Text'
import EN_LABELS from '@public/content/english'
import { TableContainer } from '@components/Table'
import { HandoffReportsTable } from '@components/Table/HandoffReports'
import { PrimaryButton } from '@components/Buttons'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { timesheetReducer } from '@redux/slices/timesheetSlice'

export async function getStaticProps () {
  const title = EN_LABELS['app.ddds.reports.title']
  return { props: { title } }
}
export default function ReportsPage ({ title }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [reportType, setReportType] = useState('')
  const [reportShift, setReportShift] = useState('')
  const handleTypeChange = e => {
    setReportType(e.target.value)
  }
  const handleShiftChange = e => {
    setReportShift(e.target.value)
  }

  const onLogout = () => {
    dispatch(timesheetReducer.actions.reset())
    router.push('/timesheet')
  }

  const logoutButton = (
    <PrimaryButton
      label={EN_LABELS['app.default.button.logout']}
      onClick={onLogout}
    />
  )

  return (
    <PageWrapper
      id='reports'
      title={title}
      icon='Reports'
      component={logoutButton}
    >
      <TableContainer>
        <Heading1>{EN_LABELS['app.ddds.reports.description']}</Heading1>
        <HandoffReportsTable
          reports={[0, 0, 0]}
          reportType={reportType}
          reportShift={reportShift}
          handleTypeChange={handleTypeChange}
          handleShiftChange={handleShiftChange}
        />
      </TableContainer>
    </PageWrapper>
  )
}

ReportsPage.getLayout = getSidebarLayout
