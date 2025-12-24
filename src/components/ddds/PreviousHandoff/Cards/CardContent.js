import React from 'react'
import {
  CardRowCol,
  CardRowContainer,
  CardBadge,
  CardLabel,
  CardLabelContainer,
  ReportContainer,
  TargetIcon,
  TargetValueContainer,
  TargetValueLabel,
  FlagBox
} from './styles'
import { Icon } from '@components/Icon'
import { utcToZonedTime, format } from 'date-fns-tz'
import { colors } from '@design/colors'

export function CardRow (props) {
  return (
    <CardRowContainer>
      <CardRowCol>
        <CardText color={colors.mediumGrey} label={props.label} />
      </CardRowCol>
      <CardRowCol cols={props.cols ?? 1}>{props.children}</CardRowCol>
    </CardRowContainer>
  )
}
export function CardText ({ color, label, badge, success }) {
  const backgroundColor = success ? colors.green : colors.red
  return (
    <CardLabelContainer>
      <CardLabel color={color ?? colors.black}>{label}</CardLabel>
      {badge && (
        <CardBadge color={colors.white} backgroundColor={backgroundColor}>
          {badge}
        </CardBadge>
      )}
    </CardLabelContainer>
  )
}
export function ReportWrapper ({ children, ...props }) {
  return (
    <ReportContainer>
      {children}
      <RowFlag isFlagged={props.isFlagged} />
    </ReportContainer>
  )
}
function RowFlag ({ isFlagged }) {
  const color = isFlagged ? colors.white : colors.black
  return (
    <FlagBox flagged={isFlagged} disabled={!isFlagged}>
      <Icon icon='Flag' color={color} />
    </FlagBox>
  )
}
export function TargetValueItem ({ value, showBadge = true, isAbove = false }) {
  const bgColor = isAbove ? colors.red : colors.blueSecondary
  const iconType = isAbove ? 'ArrowUp' : 'ArrowDown'
  return (
    <TargetValueContainer>
      <TargetValueLabel>{value}</TargetValueLabel>
      {showBadge && (
        <TargetIcon color={bgColor}>
          <Icon icon={iconType} color={colors.white} />
        </TargetIcon>
      )}
    </TargetValueContainer>
  )
}
export function DateItem ({ value }) {
  const date = new Date(value)
  const timeZone = 'America/Halifax'
  const zonedDate = utcToZonedTime(date, timeZone)
  const pattern = 'MM/dd/yyyy HH:MM'
  const output = format(zonedDate, pattern, { timeZone })

  return (
    <TargetValueContainer>
      <TargetValueLabel>{output}</TargetValueLabel>
    </TargetValueContainer>
  )
}
