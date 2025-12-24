import styled from 'styled-components'
import { fonts } from '@design/fonts'
import devices from '@design/devices'

export const Badge = styled.div`
  display: grid;
  align-items: center;
  padding: 0.5rem;
  font-size: ${fonts.xxl};
  font-weight: 800;
  text-align: center;
  ${({ $color, $bgcolor }) => `
    background-color: ${$bgcolor};
    color: ${$color};
  `}
  @media ${devices.lg} {
    font-size: 3rem;
  }
`
