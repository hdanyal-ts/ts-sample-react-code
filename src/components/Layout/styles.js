import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const Column = styled.div`
  grid-column: 1 / -1;
`
export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow-y: scroll;
  padding: 0 1rem 1rem;
  align-items: stretch;
`
export const HeadingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`
export const PageTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  column-gap: 1rem;
`
export const DefaultLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`
export const SidebarLayoutContainer = styled(DefaultLayoutContainer)`
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 100vh;
`
export const HuddleBoardLayoutContainer = styled(DefaultLayoutContainer)`
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100vh;
`
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.02fr 1fr;
  height: 100vh;
  background-color: ${colors.lightGrey};
`
export const HuddleBoardWrapper = styled.div`
  display: grid;
  width: 100%;
  overflow-y: auto;
`
export const NumberBadge = styled.div`
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  font-weight: 400;
  padding: 0.25rem 0.5rem;
  font-size: ${fonts.md};
  margin-right: 0.5rem;
`
export const InputLabel = styled.div`
  font-size: ${fonts.md};
  color: ${colors.black};
`
export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  row-gap: 1rem;
  align-items: center;
  margin: 1rem 0 1.5rem;
`
