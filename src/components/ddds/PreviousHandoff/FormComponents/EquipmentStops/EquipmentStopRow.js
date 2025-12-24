import React from 'react'
import { formatText } from '@utils/format'
import { NumberBadge } from '../../../../Layout/styles'
import { RowFlag } from '../Table/TableComponents'
import { CellLabel, TableInputContainer } from '../Table/TableComponents/styles'
import { Cell, Row, RowContainer } from '../Table/styles'

export default function EquipmentStopRow (props) {
  const { columns, row } = props

  return (
    <RowContainer>
      <Row col={columns}>
        <StopCell value={formatText(row.area)} />
        <StopCell value={row.downtimeStart} />
        <StopCell value={row.downtimeEnd} />
        <StopCell value={row.totalDuration} badge='MIN' />
        <StopCell value={row.category} />
        <StopCell value={row.comment} />
        <StopCell value={row.suggestedNextSteps.response} />
      </Row>
      <RowFlag isFlagged={row.isFlagged} isFlagDisabled />
    </RowContainer>
  )
}
export function StopCell ({ value, badge = null }) {
  return (
    <Cell>
      <TableInputContainer>
        <CellLabel>{value}</CellLabel>
        {badge !== null && <NumberBadge>{badge}</NumberBadge>}
      </TableInputContainer>
    </Cell>
  )
}
