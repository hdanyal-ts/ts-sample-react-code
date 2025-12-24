import styled from 'styled-components'
import { colors } from '@design/colors'
import devices from '@design/devices'

export const KPIContainer = styled.div`
  display: grid;
  text-align: left !important;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, minmax(0, auto));
  grid-gap: 0.4rem;
  color: ${colors.black};

  @media ${devices.lg} {
    grid-template-columns: repeat(3, minmax(0, auto));
    grid-template-rows: repeat(9, minmax(0, auto));
  }
`
