import React from 'react'
import usePackagingStopTotal from '@hooks/usePackagingStopTotal'
import composeTableComponent, { RowFlag } from './TableComponents'
import {
  Cell,
  EmptyBox,
  HeaderCell,
  Row,
  RowContainer,
  RowHeaderContainer,
  TableContainer,
  TableHeader
} from './styles'

export function PackagingTotalTable (props) {
  const tableProps = usePackagingStopTotal(props)
  return <Table key={tableProps.id} item={tableProps} hideFlag />
}
function Table (props) {
  const { item, hideFlag = false } = props
  const { headers, label, rows } = item
  const columns = headers.length
  const isFlagDisabled = rows.filter(item => item.isFlagged).length === 2

  const composeTableResponse = composeTableRows({
    columns,
    isFlagDisabled,
    showFlag: !hideFlag
  })

  return (
    <TableContainer>
      {label && (
        <RowContainer>
          <TableHeader>{label.toUpperCase()}</TableHeader>
          <EmptyBox />
        </RowContainer>
      )}
      <RowContainer>
        <RowHeaderContainer col={columns}>
          {headers.map((label, index) => (
            <HeaderCell key={index}>{label}</HeaderCell>
          ))}
        </RowHeaderContainer>
        <EmptyBox />
      </RowContainer>
      {rows.map(composeTableResponse)}
    </TableContainer>
  )
}

function composeTableRows (props) {
  return row => {
    const { columns, isFlagDisabled, showFlag } = props

    return (
      <RowContainer>
        <Row col={columns}>
          {row.responses.map((content, index) => {
            const component = composeTableComponent(content)
            return (
              <Cell key={index} grid={content.grid}>
                {component}
              </Cell>
            )
          })}
        </Row>
        {showFlag
          ? (
            <RowFlag isFlagged={row.isFlagged} isFlagDisabled={isFlagDisabled} />
            )
          : (
            <EmptyBox />
            )}
      </RowContainer>
    )
  }
}

export default Table
