import React from 'react'
import { Heading2 } from '../../Text'
import { colors } from '@design/colors'
import { useRouter } from 'next/router'
import { PageHeaderButton } from '../../Buttons'
import { Icon } from '../../Icon'
import { useDispatch } from 'react-redux'
import { timesheetReducer } from '@redux/slices/timesheetSlice'
import EN_LABELS from '@public/content/english'
import {
  ActionsContainer,
  InformationContainer,
  LabelContainer,
  LogoutButton,
  NavButton,
  NavigationContainer
} from './styles'

function HuddleBoardNav ({ title, date }) {
  const router = useRouter()
  const dispatch = useDispatch()

  const onClickButton = page => () => router.push(`/ddds/huddle-board/${page}`)
  const goToKPI = onClickButton('kpi')
  const goToRecap = onClickButton('recap')
  const goToActionLog = onClickButton('action-log')

  const isActive = page => `/ddds/huddle-board/${page}` === router.pathname

  const onLogout = () => {
    dispatch(timesheetReducer.actions.reset())
    router.push('/timesheet')
  }

  return (
    <NavigationContainer id='huddle-board-nav'>
      <InformationContainer>
        <PageHeaderButton
          icon='ArrowBack'
          color={colors.mediumGrey}
          borderColor={colors.mediumGrey}
          bgColor='transparent'
          router={router}
        />
        <div>COMPANY LOGO</div>
        <Heading2>{date}</Heading2>
      </InformationContainer>
      <LabelContainer>
        <Heading2>{title}</Heading2>
      </LabelContainer>
      <ActionsContainer>
        <NavLink
          id='kpi-link'
          active={isActive('kpi')}
          onClick={goToKPI}
          label={EN_LABELS['app.ddds.huddle-board.nav.kpi']}
        />
        <NavLink
          id='recap-link'
          active={isActive('recap')}
          onClick={goToRecap}
          label={EN_LABELS['app.ddds.huddle-board.nav.recap']}
        />
        <NavLink
          id='action-log-link'
          active={isActive('action-log')}
          onClick={goToActionLog}
          label={EN_LABELS['app.ddds.huddle-board.nav.action-log']}
        />
        <LogoutButton id='logout-button' onClick={onLogout}>
          <Icon icon='Logout' iconSize={40} color={colors.black} />
        </LogoutButton>
      </ActionsContainer>
    </NavigationContainer>
  )
}
function NavLink ({ id, active, label, onClick }) {
  return (
    <NavButton id={id} $active={active} onClick={onClick}>
      {label}
    </NavButton>
  )
}

export default HuddleBoardNav
