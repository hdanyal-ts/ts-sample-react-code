import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const TabsContainer = styled.div`
  display: grid;
  position: sticky;
  top: 0;
  z-index: 1;
  text-align: center;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  margin: 0;
  height: 5rem;
`
const activeTab = `
  color: ${colors.brandYellow};
  background-color: ${colors.black};
  border-bottom: 0.15rem solid ${colors.brandYellow};
`
const disabledTab = `
  color: ${colors.black};
  background-color: ${colors.white};
  border-bottom: 0.15rem solid ${colors.brandYellow};
`
export const Tab = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${fonts.lg};
  width: 100%;
  cursor: pointer;
  ${props => (props.active ? activeTab : disabledTab)}
`
