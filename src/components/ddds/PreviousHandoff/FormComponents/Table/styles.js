import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'
import { Column } from '../../../../Layout/styles'

export const Cell = styled.div`
  display: grid;
  border: 0.05rem solid ${colors.mediumGrey};
  font-weight: 400;
  justify-content: strech;
  align-items: center;
  min-height: 3rem;
  ${props => props.grid && `grid-column: ${props.grid};`}
`

export const HeaderCell = styled.div`
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  font-size: ${fonts.md};
  font-weight: 400;
  padding: 1rem;
`
export const Row = styled.div`
  display: grid;
  grid-auto-flow: rows;
  grid-template-columns: repeat(${props => props.col}, minmax(0, 1fr));
  grid-gap: 0.25rem;
`
export const RowHeaderContainer = styled(Row)``
export const TableContainer = styled(Column)`
  display: grid;
  grid-gap: 0.25rem;
  margin: 0.5rem 0;
`
export const TableHeader = styled.div`
  display: grid;
  background-color: ${colors.lightGrey};
  color: ${colors.blueSecondary};
  font-size: ${fonts.lg};
  padding: 0 1rem;
  height: 3rem;
  align-items: center;
  margin-top: 1rem;
`
export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 0.5rem;
`
export const EmptyBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: ${colors.white};
  border: 0.1rem solid ${colors.white};
`
