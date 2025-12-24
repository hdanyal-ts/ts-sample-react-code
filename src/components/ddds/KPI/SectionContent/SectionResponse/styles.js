import styled from 'styled-components'
import { fonts } from '@design/fonts'
import devices from '@design/devices'

const badgeStyle = `
  justify-self: flex-end;
`
const labelStyle = `
  justify-self: flex-start;
`
export const ResponseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col ?? '3'}, minmax(0, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(0, auto));
  grid-gap: 0.25rem;
`
export const ResponseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  overflow: auto;
  overflow-wrap: break-word;
  ${({ $color, $bold, $fontsize, $bgcolor }) => `
    background-color: ${$bgcolor};
    color: ${$color};
    font-weight: ${$bold ? '700' : '400'};
    font-size: ${$fontsize ?? fonts.md};
    @media ${devices.lg} {
      font-size: ${$fontsize ?? fonts.lg};
    }
  `}
`
export const ResponseLabel = styled.div`
  ${({ $isbadge }) => ($isbadge ? badgeStyle : labelStyle)}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: horizontal;
  overflow: hidden;
  text-overflow: ellipsis;
`
