import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const TabsContainer = styled.div`
  display: grid;
  position: relative;
  top: 0;
  z-index: 1;
  font-weight: bold;
  font-size: ${fonts.lg};
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  column-gap: 1rem;
  grid-template-rows: 1fr;
  margin: 0;
  height: 3.25rem;
  border-bottom: 0.15rem solid ${colors.black};
`
const activeTab = `
border-bottom: 0.25rem solid ${colors.blueSecondary};
`
const disabledTab = `
border-bottom: 0.25rem solid transparent;
`
export const Tab = styled.div`
  display: grid;
  color: ${colors.black};
  align-items: center;
  justify-content: start;
  background-color: ${colors.white};
  padding: 0 1rem;
  cursor: pointer;
  ${props => (props.active ? activeTab : disabledTab)}
`
