import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  border: 0.15rem solid ${colors.grey};
  background-color: ${colors.white};
  overflow-y: auto;
`
export const HeaderButton = styled.button`
  justify-self: flex-end;
  background-color: ${colors.white};
  color: ${colors.blueSecondary};
  border: 0.15rem solid ${colors.blueSecondary};
  font-weight: 600;
  min-width: 9rem;
  padding: 0.72rem 1.35rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${fonts.md};
  margin: 0.1rem 0.05rem;
  cursor: pointer;
  &:disabled {
    color: ${colors.mediumGrey};
    background-color: ${colors.grey};
    cursor: not-allowed;
  }
`
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto auto;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.75rem 0;
`
export const HeaderLabel = styled.div`
  font-size: ${fonts.lg};
  color: ${colors.black};
  font-weight: 600;
`
export const PreviousContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  overflow: scroll;
  position: relative;
`
