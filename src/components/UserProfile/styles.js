import styled from 'styled-components'
import { colors } from '@design/colors'

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 9rem);
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`
export const ProfileRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 1rem;
  justify-items: flex-start;
  border-bottom: 0.1rem solid ${colors.grey};
  ${({ $col }) =>
    `grid-template-columns: repeat(${$col ?? 2}, minmax(0, auto));`};
`
export const ProfileItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  justify-self: start;
  row-gap: 1rem;
`
