import styled from 'styled-components'
import { fonts } from '@design/fonts'
import devices from '@design/devices'

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  grid-gap: 0.25rem;
  grid-template-rows: ${({ rows }) => rows ?? '1fr'};
`
export const ContentHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 0.25rem;
`
export const Cell = styled.div`
  display: grid;
  align-items: center;
  overflow: auto;
  overflow-wrap: break-word;
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
