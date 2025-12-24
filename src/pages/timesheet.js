import React from 'react'
import { getDefaultLayout } from '@components/Layout'
import companyLogo from '@public/assets/images/company-logo.svg'
import { GET_ACCOUNT, GET_PLANT, GET_POSITIONS } from '@public/data/sample'
import useTimesheetLogin from '@hooks/useTimesheetLogin'
import FullPageLoader from '@components/Layout/FullPageLoader'
import { PageContainer, TimesheetLogo } from '@components/Timesheet/styles'
import { LogoContainer } from '@components/Layout/Sidebar/styles'
import { CreateTimesheet } from '@components/Timesheet'

export async function getServerSideProps () {
  const employee = GET_ACCOUNT.employee
  const positions = GET_POSITIONS.positions
  const plantInformation = GET_PLANT.plant
  return { props: { employee, plantInformation, positions } }
}
export default function TimesheetPage (props) {
  const { employee, plantInformation, positions } = props
  const {
    dropdownOptions,
    hideLogin,
    isLoading,
    onCreateTimesheet,
    plant,
    selectedPositions,
    setSelectedPositions,
    user
  } = useTimesheetLogin({ employee, plantInformation, positions })

  if (hideLogin || isLoading) return <FullPageLoader />

  return (
    <PageContainer id='timesheet'>
      <div>
        <LogoContainer>
          <TimesheetLogo src={companyLogo} alt='Company Logo' />
        </LogoContainer>
        <CreateTimesheet
          dropdownOptions={dropdownOptions}
          onCreateTimesheet={onCreateTimesheet}
          plant={plant}
          selectedPositions={selectedPositions}
          setSelectedPositions={setSelectedPositions}
          user={user}
        />
      </div>
    </PageContainer>
  )
}

TimesheetPage.getLayout = getDefaultLayout
