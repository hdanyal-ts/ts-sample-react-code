import React from 'react'
import { colors } from '@design/colors'
import SectionCell from '../SectionCell'
import { TableRowsWrapper } from './styles'

function SectionTable (props) {
  const { bgColor, metric, isContentVisible } = props
  const columns = metric.headers.length

  return (
    <TableRowsWrapper col={columns}>
      {metric.headers.map((item, index) => (
        <TableCell
          key={`${metric.type}-${index}`}
          bgColor={`${bgColor}60`}
          gridColumn={index === 0 ? '1 / span 1' : 'auto / span 2'}
          gridRow='1'
          label={item}
          bold
        />
      ))}
      {metric.rows.map((item, index) => (
        <TableRow
          key={index}
          index={index}
          metric={metric}
          item={item}
          isContentVisible={isContentVisible}
          bgColor={bgColor}
        />
      ))}
    </TableRowsWrapper>
  )
}
function TableCell (props) {
  const { badge, bgColor, bold, gridColumn, gridRow, label } = props
  return (
    <SectionCell
      color={colors.black}
      bgColor={bgColor}
      isBold={bold}
      style={{ gridColumn, gridRow }}
      label={label}
      badge={badge}
    />
  )
}
function TableRow (props) {
  const { metric, bgColor, item, index, isContentVisible } = props
  return (
    <>
      <TableCell
        key={`${metric.type}-1`}
        bgColor={`${bgColor}60`}
        gridColumn='1 / span 1'
        gridRow={index + 2}
        label={item.label}
        bold
      />
      {item.responses.map((response, rIndex) => (
        <TableCell
          key={`${metric.type}-${rIndex}`}
          bgColor={`${bgColor}20`}
          gridColumn='auto / span 2'
          gridRow={index + 2}
          label={isContentVisible ? response.value : ''}
          badge={response?.badge}
        />
      ))}
    </>
  )
}

export default SectionTable
