import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, minmax(0, auto));
  justify-items: flex-start;
  align-items: center;
  align-content: stretch;
  padding: 0.65rem;
  font-size: ${fonts.sm};
  background-color: ${colors.white};
  height: 12.5rem;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1.5px 5px 0 rgba(0, 0, 0, 0.1);
`
export const CardLabel = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: normal;
  color: ${colors.black};
`
export const StatusHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 0.5rem;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-between;
`
export const StatusLabel = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  padding: 0.45rem 0.8rem;
  color: ${colors.white};
  background-color: ${({ $bgcolor }) => $bgcolor ?? 'transparent'};
  ${({ color, $bgcolor }) => `
    color: ${color ?? colors.black};
    background-color: ${$bgcolor ?? 'transparent'};
  `}
`
export const ImpactLabel = styled(StatusLabel)`
  border-radius: 1rem;
  color: ${colors.black};
  background-color: ${colors.brandYellow};
`
