import styled from 'styled-components'
import { colors } from '@design/colors'
import { Label } from '../../Text'
import { fonts } from '@design/fonts'

export const KanbanContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow-y: scroll;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
  justify-items: flex-start;
  align-items: flex-start;
  column-gap: 0.5rem;
  height: 100%;
`
export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  row-gap: 0.5rem;
  width: 100%;
  align-items: flex-start;
`
export const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  position: relative;
  margin: 1rem 0;
  width: 100%;
  align-items: center;
`
export const CountBadge = styled.div`
  display: grid;
  padding: 0.75rem;
  align-content: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  color: ${colors.white};
  font-weight: bold;
  font-size: ${fonts.lg};
  border-radius: 100%;
  margin-right: 0.5rem;
  background-color: ${({ $bgcolor }) => $bgcolor ?? 'transparent'};
`
export const ColumnLabel = styled(Label)`
  font-weight: bold;
  font-size: ${fonts.lg};
  margin-left: 0.5rem;
`
