import React from 'react'
import { CellLabel, FlagBox, TableInputContainer, TableInput } from './styles'
import { Column, NumberBadge } from '../../../../../Layout/styles'
import { STATIC_TEXT_FIELDS } from '../../../Sections/SectionContent'
import { colors } from '@design/colors'
import { Icon } from '@components/Icon'

function composeTableComponent (item) {
  const key = item.id
  const componentType = STATIC_TEXT_FIELDS.includes(item.type)
    ? 'TEXT_INPUT'
    : item.type
  switch (componentType) {
    case 'TEXT_INPUT':
      return <TableField key={key} {...item} />
    case 'HEADER':
      return item.label
        .split('\n')
        .map((item, i) => <CellLabel key={i}>{item}</CellLabel>)
    default:
      return <Column key={key}>{'<MISSING COMPONENT>'}</Column>
  }
}
export function RowFlag ({ isFlagged, isFlagDisabled, onClick }) {
  const isDisabled = !isFlagged && isFlagDisabled
  const defaultColor = isFlagged ? colors.white : colors.black
  const flagColor = isDisabled ? colors.white : defaultColor
  return (
    <FlagBox flagged={isFlagged} onClick={onClick} disabled={isDisabled}>
      <Icon icon='Flag' color={flagColor} />
    </FlagBox>
  )
}
function TableField ({ badge, placeholder, response }) {
  const validResponse = response !== undefined && response !== ''
  const value = validResponse ? response : 'N/A'
  return (
    <TableInputContainer>
      <TableInput>{value}</TableInput>
      {badge && <NumberBadge>{badge}</NumberBadge>}
    </TableInputContainer>
  )
}

export default composeTableComponent
