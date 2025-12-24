import React from 'react'
import { Cell, HeaderCell, Row, TableBody, TableHead, TableWrapper } from '..'
import EN_LABELS from '@public/content/english'
import { formatDate } from '@utils/dates'

export const SECTIONS = ['Processing', 'Packaging']
const LIVE_SCHEDULE_HEADERS = [
  EN_LABELS['app.default.table.header.line'],
  EN_LABELS['app.default.table.header.sku'],
  EN_LABELS['app.default.table.header.product'],
  EN_LABELS['app.default.table.header.bin'],
  EN_LABELS['app.default.table.header.changeover']
]

export function LiveScheduleTable ({ schedule }) {
  return (
    <TableWrapper id='live-schedule-table'>
      <TableHead>
        <Row className='live-schedule-header'>
          {LIVE_SCHEDULE_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='live-schedule-body'>
        {schedule.map((item, index) => {
          return (
            <Row key={index}>
              <Cell>{item.line}</Cell>
              <Cell>{item.sku}</Cell>
              <Cell>{item.description}</Cell>
              <Cell>{item.selectedBin}</Cell>
              <Cell>{formatDate(item.changeoverTime)}</Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}
