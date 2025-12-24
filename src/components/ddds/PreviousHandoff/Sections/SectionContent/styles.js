import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 0.25rem;
  font-size: ${fonts.md};
  border: 0.05rem solid ${colors.darkGrey};
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ gap }) => gap};
`
export const ComponentWrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 100%;
  column-gap: 2rem;
  ${({ customgrid }) => {
    return `
      grid-template-columns: repeat(${customgrid.cols}, minmax(0, 1fr));
      grid-template-rows: repeat(${customgrid.rows}, minmax(0, auto));
      `
  }}
`
export const ContentContainer = styled.div`
  padding: 1rem 0.5rem;
`
