import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const ComponentHeader = styled.div`
  font-weight: 600;
  font-size: ${fonts.md};
  margin: 0.75rem 0;
`
export const EmptyReportedContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  background-color: ${colors.lightGrey};
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`
export const EmptyReportedLabel = styled.div`
  font-weight: 400;
  font-size: ${fonts.md};
  color: ${colors.black};
  margin-left: 1rem;
`
export const EmptyIconContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  width: 3rem;
  height: 3rem;
  color: white;
`
