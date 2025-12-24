import styled from 'styled-components'
import { EmptyBox } from '../styles'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

const activeFlagStyle = `
  border: 0.1rem solid ${colors.blueSecondary};
  background-color: ${colors.blueSecondary};
`
const inactiveFlagStyle = `
  border: 0.1rem solid ${colors.black};
`
const disableFlagStyle = `
  border: 0.1rem solid ${colors.lightGrey};
  background-color: ${colors.lightGrey};
  cursor: not-allowed;
`
export const CellLabel = styled.div`
  padding: 1rem;
  font-size: ${fonts.md};
`
export const TableInput = styled.div`
  font-size: ${fonts.md};
  color: ${colors.darkGrey};
  border: none;
  outline: none;
  box-sizing: border-box;
  grid-column: 1 / span auto;
  padding: 0.9rem;
`
export const TableInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`
export const FlagBox = styled(EmptyBox)`
  display: grid;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${colors.black};
  cursor: pointer;
  ${({ disabled, flagged }) =>
    disabled ? disableFlagStyle : flagged ? activeFlagStyle : inactiveFlagStyle}
`
