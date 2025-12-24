import React from 'react'
import { DEFECT_STATUS_COLORS, colors } from '@design/colors'
import { compareBeforeSixtyDays, formatDate } from '@utils/dates'
import { ImpactLabel, StatusLabel } from '../../DefectKanban/DefectCard/styles'
import { ListLabel, ListRow, StatusContainer } from './styles'

function DefectListItem ({ defect }) {
  const statusColor = DEFECT_STATUS_COLORS[defect.status]
  const oldDefect = compareBeforeSixtyDays(defect.createdAt)
  return (
    <ListRow>
      <div>
        <ListLabel>{formatDate(defect.createdAt)}</ListLabel>
        {oldDefect && <ListLabel>Over 60 days old</ListLabel>}
      </div>
      <ListLabel>{defect.title}</ListLabel>
      <div>
        <ListLabel>{defect.area}</ListLabel>
        <ListLabel>{defect.equipment}</ListLabel>
      </div>
      <div>
        <ImpactLabel>{defect.impactTag}</ImpactLabel>
      </div>
      <div>
        <StatusContainer>
          <StatusLabel $bgcolor={statusColor} color={colors.white}>
            {defect.status.replace('_', ' ')}
          </StatusLabel>
          <ListLabel style={{ color: colors.mediumGrey }}>
            {defect.subStatus}
          </ListLabel>
          <ListLabel>{defect.assignedTo}</ListLabel>
        </StatusContainer>
      </div>
    </ListRow>
  )
}
export default DefectListItem
