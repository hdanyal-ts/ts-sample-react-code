import styled from 'styled-components'
import { colors } from '@design/colors'

export const Circle = styled.button`
  display: grid;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;
  ${({ color, $bgcolor, $bordercolor }) => `
    color: ${color ?? colors.black};
    background-color: ${$bgcolor ?? colors.brandYellow};
    border: 0.1rem solid ${$bordercolor ?? colors.yellow};
  `}
`
