import styled from 'styled-components'
import { Cell } from '../styles'
import { colors } from '@design/colors'

const badgeStyle = `
  justify-self: flex-end;
  color: ${colors.mediumGrey};
`
const labelStyle = `
  justify-self: flex-start;
  color: ${colors.black};
`
export const TableRowsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2rem, auto));
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 0.25rem;
`
export const CellContainer = styled(Cell)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, 1fr);
  /* justify-items: space-between; */
`
export const CellLabel = styled.div`
  ${({ $isbadge }) => ($isbadge ? badgeStyle : labelStyle)}
`
