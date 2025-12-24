import styled from 'styled-components'
import { colors } from '@design/colors'

export const ListViewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow-y: scroll;
`
export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
  height: 4.5rem;
  border-bottom: 0.2rem solid ${colors.grey};
  align-content: center;
  align-items: center;
  justify-content: flex-start;
`
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  height: 100%;
  overflow: scroll;
`
