import React from 'react'
import styled from 'styled-components'
import { fonts } from '@design/fonts'
import EN_LABELS from '@public/content/english'

const CellSelect = styled.select`
  display: grid;
  width: 100%;
  height: 100%;
  justify-self: stretch;
  align-self: stretch;
  height: 3rem;
  border: none;
  font-size: ${fonts.lg};
`
const SelectOption = styled.option`
  display: grid;
  height: 100%;
  padding: 1rem;
  align-self: stretch;
`

function CellDropdown (props) {
  const { value, onChange, options } = props
  return (
    <CellSelect
      placeholder={EN_LABELS['app.default.dropdown.default-placeholder']}
      value={value}
      onChange={onChange}
    >
      <SelectOption disabled>
        {EN_LABELS['app.default.dropdown.default-placeholder']}
      </SelectOption>
      {options.map(option => (
        <SelectOption key={option} value={option}>
          {option}
        </SelectOption>
      ))}
    </CellSelect>
  )
}

export default CellDropdown
