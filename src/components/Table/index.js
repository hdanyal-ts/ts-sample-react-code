import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

const activeStyle = `
  cursor: pointer;
  color: ${colors.black};
  background-color: ${colors.brandYellow};
`
const disabledStyle = `
  cursor: default;
  color: ${colors.black};
  background-color: ${colors.grey};
`
export const Cell = styled.td`
  border: 0.01rem solid ${colors.grey};
  padding: 1rem 0.5rem;
  min-height: 3rem;
`
export const CellContainer = styled.td`
  border: 0.01rem solid ${colors.grey};
  height: 3rem;
`
export const CellGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  height: 3rem;
`
export const HeaderCell = styled.th`
  background-color: ${colors.black};
  color: ${colors.brandYellow};
  font-weight: bold;
  padding: 1rem 0.5rem;
  text-align: start;
`
export const Row = styled.tr``
export const TableBody = styled.tbody``
export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 1.5rem;
  align-content: flex-start;
  justify-self: stretch;
  padding: 1rem;
  background-color: ${colors.white};
`
export const TableHead = styled.thead``
export const TableWrapper = styled.table`
  font-size: ${fonts.md};
  font-weight: 500;
  border-spacing: 0;
`
export const CellButton = styled.button`
  display: grid;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border: none;
  ${activeStyle}
  &:disabled {
    ${disabledStyle}
  }
`
