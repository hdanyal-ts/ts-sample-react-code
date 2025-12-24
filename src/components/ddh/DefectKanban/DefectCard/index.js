import React from 'react'
import { DEFECT_STATUS_COLORS, colors } from '@design/colors'
import { formatDate } from '@utils/dates'
import {
  CardContainer,
  CardLabel,
  ImpactLabel,
  StatusHeader,
  StatusLabel
} from './styles'

function DefectCard ({ card }) {
  const statusColor = DEFECT_STATUS_COLORS[card.status]
  return (
    <CardContainer>
      <StatusHeader>
        <StatusLabel $bgcolor={statusColor} color={colors.white}>
          {card.status.replace('_', ' ')}
        </StatusLabel>
        <CardLabel style={{ color: colors.mediumGrey }}>
          {card.subStatus}
        </CardLabel>
      </StatusHeader>
      <CardLabel>
        {card.area} - {card.equipment}
      </CardLabel>
      <ImpactLabel>{card.impactTag}</ImpactLabel>
      <CardLabel>{card.assignedTo}</CardLabel>
      <CardLabel style={{ fontWeight: 700 }}>{card.title}</CardLabel>
      <CardLabel>{formatDate(card.createdAt)}</CardLabel>
    </CardContainer>
  )
}

export default DefectCard
