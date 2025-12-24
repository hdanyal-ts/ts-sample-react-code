import React from 'react'
import styled from 'styled-components'
import { Cell, HeaderCell, Row, TableBody, TableHead, TableWrapper } from '..'
import { colors } from '@design/colors'
import EN_LABELS from '@public/content/english'
import { fonts } from '@design/fonts'
import { formatDate } from '@utils/dates'

const DEVIATION_HEADERS = [
  EN_LABELS['app.default.table.header.parameter'],
  EN_LABELS['app.default.table.header.logged-at'],
  EN_LABELS['app.default.table.header.low'],
  EN_LABELS['app.default.table.header.target'],
  EN_LABELS['app.default.table.header.high'],
  EN_LABELS['app.default.table.header.deviation'],
  EN_LABELS['app.default.table.header.sku'],
  EN_LABELS['app.default.table.header.bin'],
  EN_LABELS['app.default.table.header.action']
]

const DeviationValueCell = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-between;
`
const TargetBadge = styled.div`
  font-size: ${fonts.sm};
  font-weight: 500;
  text-align: center;
  padding: 0.35rem;
  width: 3.5rem;
  color: white;
`

export function DeviationHistoryTable ({ deviations, onClickAction }) {
  return (
    <TableWrapper id='deviation-history-table'>
      <TableHead>
        <Row className='deviation-history-header'>
          {DEVIATION_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`} className='deviation-header-cell'>
              {label.toUpperCase()}
            </HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='deviation-history-body'>
        {deviations.map((item, index) => {
          const aboveTarget = item.aboveTarget === 1
          const targetValue = aboveTarget ? 'high' : 'low'
          const backgroundColor = aboveTarget
            ? colors.red
            : colors.blueSecondary
          const label = EN_LABELS[`app.default.table.header.${targetValue}`]
          return (
            <Row key={index} className='deviation-row'>
              <Cell>{item.sensorName.replace('_', ' ').replace('_', ' ')}</Cell>
              <Cell>{formatDate(item.loggedTime)}</Cell>
              <Cell>{item.low}</Cell>
              <Cell>{item.target}</Cell>
              <Cell>{item.high}</Cell>
              <Cell>
                <DeviationValueCell>
                  {item.deviation}
                  <TargetBadge style={{ backgroundColor }}>{label}</TargetBadge>
                </DeviationValueCell>
              </Cell>
              <Cell>{item.setpoints.sku}</Cell>
              <Cell>{item.setpoints.bin}</Cell>
              <Cell onClick={() => onClickAction(item.id)}>
                {item.reported ? 'REPORTED' : 'REPORT'}
              </Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}
