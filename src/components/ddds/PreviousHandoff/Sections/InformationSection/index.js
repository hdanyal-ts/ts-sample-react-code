import React from 'react'
import { colors } from '@design/colors'
import SectionBanner from '../SectionBanner'
import {
  DetailItemWrapper,
  DetailLabel,
  DetailText,
  DetailsContainer,
  InformationContainer
} from './styles'
import { utcToZonedTime, format } from 'date-fns-tz'

function InformationSection ({ handoffInformation, isOperator }) {
  return (
    <InformationContainer id='information-section'>
      <SectionBanner
        label='INFORMATION'
        borderColor={colors.mediumGrey}
        backgroundColor={colors.lightGrey}
      />
      <InformationContent
        date={handoffInformation.submittedAt}
        shift={handoffInformation.shift}
        crew={handoffInformation.crew}
        operator={handoffInformation.reportedBy}
        supervisor={handoffInformation.supervisor}
        isOperator={isOperator}
      />
    </InformationContainer>
  )
}
function InformationContent (props) {
  const { date, shift, crew, operator, supervisor, isOperator } = props
  const dateItem = new Date(date)
  const timeZone = 'America/Halifax'
  const zonedDate = utcToZonedTime(dateItem, timeZone)
  const pattern = 'MMM dd, yyyy'
  const formattedDate = format(zonedDate, pattern, { timeZone })
  const positionLabel = isOperator ? 'Operator' : 'Supervisor'
  const superiorLabel = isOperator ? 'Supervisor' : 'Shift Manager'

  return (
    <DetailsContainer>
      <DetailItem
        label='Date'
        detail={formattedDate.toUpperCase()}
        column='1 / span 2'
      />
      <DetailItem label='Shift' detail={shift} column='3 / span 1' />
      <DetailItem label='Crew' detail={crew} column='4 / span 1' />
      <DetailItem label={positionLabel} detail={operator} column='1 / span 2' />
      <DetailItem
        label={superiorLabel}
        detail={supervisor}
        column='3 / span 2'
      />
    </DetailsContainer>
  )
}
function DetailItem ({ label, detail, column }) {
  return (
    <DetailItemWrapper column={column}>
      <DetailLabel>{label}</DetailLabel>
      <DetailText>{detail}</DetailText>
    </DetailItemWrapper>
  )
}

export default InformationSection
