import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

const activeLink = `
  color: ${colors.brandYellow};
  background-color: ${colors.black};
`
const defaultLink = `
  color: ${colors.black};
  background-color: transparent;
`

export const ChildLinkContainer = styled.div``
export const HeadingContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 7rem auto auto;
  position: sticky;
  padding: 1rem 2.5rem;
`
export const YellowIcon = styled.div`
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.brandYellow};
  cursor: pointer;
  border: 0.1rem solid ${colors.yellow};
  z-index: 99;
`
export const LinkLabel = styled.div`
  font-size: ${fonts.lg};
  font-weight: 600;
  padding: 0.5rem 0;
`
export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  align-content: start;
  align-items: center;
  overflow-y: scroll;
`
export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`
export const SidebarChildLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  cursor: pointer;
  padding-left: 5rem;
  align-items: center;
  ${({ $active }) => ($active ? activeLink : defaultLink)}
  &:hover {
    ${activeLink}
  }
`
export const SidebarContainer = styled.div`
  display: grid;
  background-color: ${colors.white};
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  height: 100vh;
`
export const SidebarLinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  column-gap: 1.5rem;
  cursor: pointer;
  color: ${colors.black};
  padding: 0.25rem 2rem;
  align-items: center;
  ${({ $active }) => ($active ? activeLink : defaultLink)}
  &:hover {
    ${activeLink}
  }
`
export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1.5rem;
  align-items: center;
  justify-content: start;
`
export const UserImage = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  background-color: ${colors.grey};
`
export const UserInfo = styled.div``
