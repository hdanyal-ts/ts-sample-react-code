import React from 'react'
import {
  CardRow,
  CardText,
  DateItem,
  ReportWrapper,
  TargetValueItem
} from './CardContent'
import { CardContainer } from '../Sections/SectionContent/styles'
import { CIDContainer, CIDIcon, CIDLabel } from './styles'
import { colors } from '@design/colors'
import { Icon } from '@components/Icon'
import { formatText } from '@utils/format'

export function CIDCard (props) {
  const { isComplete, title } = props
  const iconColor = isComplete ? colors.green : colors.mediumGrey
  const iconType = isComplete ? 'Checkmark' : 'Close'
  return (
    <CIDContainer>
      <CIDLabel>{title}</CIDLabel>
      <CIDIcon color={iconColor}>
        <Icon icon={iconType} color={colors.white} />
      </CIDIcon>
    </CIDContainer>
  )
}
export function DefaultCard (props) {
  const { report } = props
  const reportId = report.id
  const description = report.description === null ? 'N/A' : report.description
  const reportedBy = report.reportedBy
  const supervisorNotified = report.supervisorNotified ? 'YES' : 'NO'
  // const attachments = report.attachments

  return (
    <ReportWrapper isFlagged={report.isFlagged}>
      <CardContainer>
        <CardRow label='Report'>
          <CardText label={reportId} />
        </CardRow>
        <CardRow label='Descripiton'>
          <CardText label={description} />
        </CardRow>
        <CardRow label='Sup. Notified'>
          <CardText label={supervisorNotified} />
        </CardRow>
        <CardRow cols={2} label='Reported By'>
          <CardText label={reportedBy} />
          <DateItem value={report.createdAt} />
        </CardRow>
        <CardRow label='Attachments'>
          <CardText label='VIEW' />
        </CardRow>
      </CardContainer>
    </ReportWrapper>
  )
}
export function DefectCard (props) {
  const { report } = props

  return (
    <ReportWrapper
      isFlagged={report.isFlagged}
      isFlagDisabled={props.isFlagDisabled}
    >
      <CardContainer>
        <CardRow label='Report'>
          <CardText label={report.id} />
        </CardRow>
        <CardRow label='Area'>
          <CardText label={report.area} />
        </CardRow>
        <CardRow label='Equipment'>
          <CardText label={report.equipment} />
        </CardRow>
        <CardRow label='Identification'>
          <CardText label={report.identification} />
        </CardRow>
        <CardRow label='Impact'>
          <CardText label={report.mainImpact} />
        </CardRow>
        <CardRow label='Title'>
          <CardText label={report.title} />
        </CardRow>
        <CardRow label='Description'>
          <CardText label={report.description} />
        </CardRow>
        <CardRow label='Next Steps'>
          <CardText label={report.suggestedNextSteps} />
        </CardRow>
        <CardRow cols={2} label='Reported By'>
          <CardText label={report.reportedBy} />
          <DateItem value={report.createdAt} />
        </CardRow>
        <CardRow label='Attachments'>
          <CardText label='VIEW' />
        </CardRow>
      </CardContainer>
    </ReportWrapper>
  )
}
export function DeviationCard (props) {
  const { report } = props
  const reportId = report.id
  const action = report.action === null ? 'N/A' : report.action
  const cause = report.cause === null ? 'N/A' : report.cause
  const justification = report.justified ? 'JUSTIFIED' : 'NOT JUSTIFIED'
  const reportedBy = report.reportedBy?.firstName
    ? `${report.reportedBy.firstName} ${report.reportedBy.lastName}`
    : report.reportedBy
  const sensor = `${formatText(report.sensor)} - ${formatText(report?.area)}`
  const sensorValue = Number.isInteger(report.value)
    ? report.value
    : report.value.toFixed(3)

  return (
    <ReportWrapper isFlagged={report.isFlagged}>
      <CardContainer>
        <CardRow label='Report'>
          <CardText
            label={reportId}
            badge={justification}
            success={report?.justified}
          />
        </CardRow>
        <CardRow cols={2} label='Sensor'>
          <CardText label={sensor} />
          <TargetValueItem isAbove={report?.aboveTarget} value={sensorValue} />
        </CardRow>
        <CardRow label='Cause'>
          <CardText label={cause} />
        </CardRow>
        <CardRow label='Actions Taken'>
          <CardText label={action} />
        </CardRow>
        <CardRow cols={2} label='Reported By'>
          <CardText label={reportedBy} />
          <DateItem value={report.createdAt} />
        </CardRow>
      </CardContainer>
    </ReportWrapper>
  )
}
export function StopCard (props) {
  const { report } = props
  const stopDetail = `${report.noStops} / ${report.downtimeDuration} MIN`
  return (
    <ReportWrapper isFlagged={report.isFlagged}>
      <CardContainer>
        <CardRow label='Report'>
          <CardText label={report.id} />
        </CardRow>
        <CardRow cols={2} label='Equipment'>
          <CardText label={report.equipment} />
          <TargetValueItem value={stopDetail} showBadge={false} />
        </CardRow>
        <CardRow label='Top Stop Reason'>
          <CardText label={report.topStopReason} />
        </CardRow>
        <CardRow label='Next Step'>
          <CardText label={report.suggestedNextSteps} />
        </CardRow>
        <CardRow cols={2} label='Reported By'>
          <CardText label={report.reportedBy} />
          <DateItem value={report.createdAt} />
        </CardRow>
      </CardContainer>
    </ReportWrapper>
  )
}
