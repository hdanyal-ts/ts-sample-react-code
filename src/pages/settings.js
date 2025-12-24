import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import useActiveTimesheet from '@hooks/useActiveTimesheet'
import { timesheetReducer } from '@redux/slices/timesheetSlice'
import UserProfile from '@components/UserProfile'
import { PrimaryButton } from '@components/Buttons'
import EN_LABELS from '@public/content/english'

export default function SettingsPage () {
  const router = useRouter()
  const dispatch = useDispatch()
  const { currentShift, positionNames, user, timesheet } = useActiveTimesheet()
  const title = EN_LABELS['app.default.settings.title']

  const onLogout = () => {
    dispatch(timesheetReducer.actions.reset())
    router.push('/timesheet')
  }

  const logoutButton = (
    <PrimaryButton
      id='logout-button'
      label={EN_LABELS['app.default.button.logout']}
      onClick={onLogout}
    />
  )

  return (
    <PageWrapper id='settings' title={title} component={logoutButton}>
      <UserProfile
        name={user.name}
        supervisor={currentShift.supervisor}
        date={timesheet?.startTime ?? 'N/A'}
        shift={currentShift.shift}
        crew={currentShift.crew}
        positions={positionNames}
      />
    </PageWrapper>
  )
}

SettingsPage.getLayout = getSidebarLayout
