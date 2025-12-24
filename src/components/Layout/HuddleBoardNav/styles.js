import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'
import devices from '@design/devices'

const activeStyle = `
  color: ${colors.brandYellow};
  background-color: ${colors.black};
`
const defaultStyle = `
  color: ${colors.black};
  background-color: ${colors.white};
`
export const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  grid-template-rows: 1fr;
  padding: 1rem;
  align-items: center;
`
export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
`
export const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  justify-content: center;
`
export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  grid-template-rows: 1fr;
  justify-content: flex-end;
  column-gap: 1rem;
`
export const NavButton = styled.button`
  padding: 0.25rem 1rem;
  font-size: ${fonts.sm};
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
  border: 0.15rem solid ${colors.mediumGrey};
  
  @media ${devices.lg} {
    font-size: ${fonts.xl};
  }

  ${({ $active }) => ($active ? activeStyle : defaultStyle)}

  &:hover {
    ${activeStyle}
  }
`
export const LogoutButton = styled.button`
  display: grid;
  border: none;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`
