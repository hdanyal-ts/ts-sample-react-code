import React from 'react'
import { Cell, HeaderCell, Row, TableBody, TableHead, TableWrapper } from '..'
import { colors } from '@design/colors'
import EN_LABELS from '@public/content/english'
import { formatDate } from '@utils/dates'
import { ActiveBinCell } from './styles'

const BIN_HEADERS = [
  EN_LABELS['app.default.table.header.bin'],
  EN_LABELS['app.default.table.header.load'],
  EN_LABELS['app.default.table.header.load-time'],
  EN_LABELS['app.default.table.header.grower'],
  'C1',
  'C2',
  'C3',
  'C4',
  EN_LABELS['app.default.table.header.gravity'],
  EN_LABELS['app.default.table.header.length'],
  EN_LABELS['app.default.table.header.defect'],
  EN_LABELS['app.default.table.header.status']
]

export function RawAttributesTable ({ rawAttributes }) {
  return (
    <TableWrapper id='raw-attributes-table'>
      <TableHead>
        <Row className='raw-attributes-header'>
          {BIN_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='raw-attributes-body'>
        {rawAttributes.map((item, index) => {
          switch (item.lastLoadTime) {
            case 'AVERAGE':
              return <BinAverageRow key={index} bin={item} />
            case 'EMPTY':
              return <BinEmptyRow key={index} bin={item} />
            default:
              return <BinLoadRow key={index} load={item} />
          }
        })}
      </TableBody>
    </TableWrapper>
  )
}
const ActiveCell = () => (
  <ActiveBinCell className='active-bin-cell'>
    {EN_LABELS['app.default.table.cell.running']}
  </ActiveBinCell>
)
function BinAverageRow ({ bin }) {
  const isActive = bin.isActive !== 0
  const statusCell = isActive ? <ActiveCell /> : <Cell className='empty-bin-cell' />
  return (
    <Row
      className='bin-average-row'
      style={{ backgroundColor: colors.lightBlue }}
    >
      <Cell>{bin.bin.replace('BIN', '')}</Cell>
      <Cell />
      <Cell>{EN_LABELS['app.default.table.cell.average']}</Cell>
      <Cell />
      <Cell>{bin.color1}</Cell>
      <Cell>{bin.color2}</Cell>
      <Cell>{bin.color3}</Cell>
      <Cell>{bin.color4}</Cell>
      <Cell>{bin.gravity}</Cell>
      <Cell>{bin.averageLength}</Cell>
      <Cell>{bin.totalDefects}</Cell>
      {statusCell}
    </Row>
  )
}
function BinEmptyRow ({ bin }) {
  return (
    <Row className='bin-empty-row' style={{ backgroundColor: colors.lightRed }}>
      <Cell>{bin.bin.replace('BIN', '')}</Cell>
      <Cell />
      <Cell>{EN_LABELS['app.default.table.cell.empty']}</Cell>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </Row>
  )
}
function BinLoadRow ({ load }) {
  return (
    <Row className='bin-load-row' style={{ backgroundColor: colors.white }}>
      <Cell>{load.bin.replace('BIN', '')}</Cell>
      <Cell>{load.loadNo}</Cell>
      <Cell>{formatDate(load.lastLoadTime)}</Cell>
      <Cell>{load.grower}</Cell>
      <Cell>{load.color1}</Cell>
      <Cell>{load.color2}</Cell>
      <Cell>{load.color3}</Cell>
      <Cell>{load.color4}</Cell>
      <Cell>{load.gravity}</Cell>
      <Cell>{load.averageLength}</Cell>
      <Cell>{load.totalDefects}</Cell>
      <Cell>{load.isActive ?? ''}</Cell>
    </Row>
  )
}
