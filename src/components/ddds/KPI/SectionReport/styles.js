import styled from 'styled-components'
import devices from '@design/devices'
import { fonts } from '@design/fonts'

const tvGridLayout = `
  &:nth-child(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 4;
  }
  &:nth-child(2) {
    grid-column: 1 / span 1;
    grid-row: 5 / span 5;
  }
  &:nth-child(3) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 9;
  }
  &:nth-child(4) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 4;
  }
  &:nth-child(5) {
    grid-column: 3 / span 1;
    grid-row: 5 / span 2;
  }
  &:nth-child(6) {
    grid-column: 3 / span 1;
    grid-row: 7 / span 3;
  }
`
export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(0, 1fr);
  grid-gap: 0.25rem;
  height: 100%;
`
export const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;
  justify-items: center;
  font-weight: 700;
  font-size: ${fonts.xl};
  padding: 0.5rem;
  ${({ $color, $bgcolor }) => `
    background-color: ${$bgcolor};
    color: ${$color};
  `}
`
export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.07fr) 1fr;
  grid-template-rows: minmax(0, auto);
  grid-gap: 0.25rem;
  @media ${devices.lg} {
    ${tvGridLayout}
  }
`
