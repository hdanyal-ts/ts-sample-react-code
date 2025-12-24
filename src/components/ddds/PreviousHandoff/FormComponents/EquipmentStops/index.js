import React from 'react'
import { groupCardsByArea } from '@utils/dataUtils'
import { NoneReported } from '../../Cards/ReportedCards'
import {
  EmptyBox,
  HeaderCell,
  RowContainer,
  RowHeaderContainer,
  TableContainer,
  TableHeader
} from '../Table/styles'
import EquipmentStopRow from './EquipmentStopRow'

const EQUIPMENT_STOP_HEADERS = [
  'Area',
  'Downtime Start',
  'Downtime End',
  'Total Downtime',
  'Root Category',
  'Comment',
  'Suggested Next Steps'
]
export function EquipmentStops (props) {
  const { item, type } = props

  if (item.cards.length === 0) {
    return <NoneReported />
  }

  const areas = groupCardsByArea(item.cards)

  return areas.map(area => (
    <EquipmentStopTable
      key={area.area}
      header={area.area}
      cards={area.cards}
      type={type}
    />
  ))
}
function EquipmentStopTable (props) {
  const { header, cards, type } = props
  const columns = EQUIPMENT_STOP_HEADERS.length
  return (
    <TableContainer>
      <RowContainer>
        <TableHeader>{header}</TableHeader>
        <EmptyBox />
      </RowContainer>
      <RowContainer>
        <RowHeaderContainer col={columns}>
          {EQUIPMENT_STOP_HEADERS.map((item, index) => (
            <HeaderCell key={index}>{item}</HeaderCell>
          ))}
        </RowHeaderContainer>
        <EmptyBox />
      </RowContainer>
      {cards.map((row, index) => (
        <EquipmentStopRow
          key={index}
          columns={columns}
          row={row}
          section={type}
        />
      ))}
    </TableContainer>
  )
}
