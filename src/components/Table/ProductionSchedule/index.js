import React from 'react'
import { Cell, HeaderCell, Row, TableBody, TableHead, TableWrapper } from '..'
import EN_LABELS from '@public/content/english'
import { formatDate } from '@utils/dates'

const PROD_SCHEDULE_HEADERS = [
  EN_LABELS['app.default.table.header.start-date'],
  EN_LABELS['app.default.table.header.line'],
  EN_LABELS['app.default.table.header.sku'],
  EN_LABELS['app.default.table.header.description'],
  EN_LABELS['app.default.table.header.info']
]

export function ProductionScheduleTable ({ schedule }) {
  return (
    <TableWrapper id='production-schedule-table'>
      <TableHead>
        <Row className='production-schedule-header'>
          {PROD_SCHEDULE_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='production-schedule-body'>
        {schedule.map((item, index) => {
          return (
            <Row key={index}>
              <Cell>{formatDate(item.startDate)}</Cell>
              <Cell>{item.line}</Cell>
              <Cell>{item.sku}</Cell>
              <Cell>{item.productDescription}</Cell>
              <Cell>VIEW</Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}
