import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'
import devices from '@design/devices'

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0.25rem;
`
export const CardListContainer = styled.div`
  display: grid;
  grid-column: 2 / span 2;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  column-gap: 0.05rem;
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 0.25rem;
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  border: 0.05rem solid ${colors.grey};
  ${({ $color, $bgcolor }) => `
    background-color: ${$bgcolor};
    color: ${$color};
  `}
`
export const CardLabel = styled.div`
  display: grid;
  grid-column: 1 / span 1;
  align-items: center;
  padding: 0.5rem;
  ${({ $color, $bold, $fontsize, $bgcolor }) => `
    background-color: ${$bgcolor};
    color: ${$color};
    font-size: ${$fontsize ?? fonts.md};
    font-weight: ${$bold ? '700' : '400'};
    @media ${devices.lg} {
      font-size: ${$fontsize ?? fonts.lg};
    }
  `}
`
export const CardAction = styled.div`
  display: grid;
  grid-column: 4 / span 1;
  align-items: center;
  justify-content: center;
  ${props => `cursor: ${props.empty ? 'none' : 'pointer'}`};
`
export const CardItem = styled(CardLabel)`
  align-content: center;
  border: 0.05rem solid ${colors.grey};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: grid;
`
export const EmptyCell = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-column: 2 / span 2;
  justify-content: center;
  font-size: ${fonts.md};
  ${props => `
    background-color: ${props.backgroundColor};
    color: ${props.color};
  `}
  @media ${devices.lg} {
    font-size: ${fonts.lg};
  }
`
export const EmptyLabel = styled.div`
  font-weight: 500;
  color: ${colors.white};
`
export const EmptyLabelBox = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background-color: ${colors.mediumGrey};
`
