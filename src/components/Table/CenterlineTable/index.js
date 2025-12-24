import React from 'react'
import { colors } from '@design/colors'
import { Cell, HeaderCell, Row, TableBody, TableHead, TableWrapper } from '..'
import EN_LABELS from '@public/content/english'

export const AREAS = ['Sorter [FRY]', 'Sorter [SPC]']
const SENSOR_HEADERS = [
  EN_LABELS['app.default.table.header.parameter'],
  EN_LABELS['app.default.table.header.category'],
  EN_LABELS['app.default.table.header.low'],
  EN_LABELS['app.default.table.header.target'],
  EN_LABELS['app.default.table.header.high'],
  EN_LABELS['app.default.table.header.current']
]

export function CenterlineTable ({ setpoints }) {
  const headerStyle = { color: colors.black, backgroundColor: colors.lightBlue }
  return (
    <TableWrapper id='centerline-table'>
      <TableHead>
        <Row className='ops-overview-header'>
          {SENSOR_HEADERS.map((label, index) => (
            <HeaderCell
              key={`${label}-${index}`}
              className='ops-header-cell'
              style={headerStyle}
            >
              <div>{label.toUpperCase()}</div>
            </HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='ops-overview-body'>
        {setpoints.measurements.map((item, index) => (
          <MeasurementRow key={index} measurement={item} />
        ))}
      </TableBody>
    </TableWrapper>
  )
}
function MeasurementRow ({ measurement }) {
  const emptyRange =
    measurement.target === measurement.low &&
    measurement.target === measurement.high
  const outOfRange =
    measurement.value < measurement.low || measurement.value > measurement.high
  const deviationFound = !emptyRange && outOfRange
  const backgroundColor = deviationFound ? `${colors.red}40` : colors.white
  return (
    <Row className='measurement-row' style={{ backgroundColor }}>
      <Cell>{measurement.name}</Cell>
      <Cell>{measurement.category}</Cell>
      <Cell>{measurement.low}</Cell>
      <Cell>{measurement.target}</Cell>
      <Cell>{measurement.high}</Cell>
      <Cell>{measurement.value}</Cell>
    </Row>
  )
}
