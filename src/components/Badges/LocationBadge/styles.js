import styled from 'styled-components'
import { fonts } from '@design/fonts'
import { colors } from '@design/colors'

export const LocationCity = styled.div`
  font-size: ${fonts.lg};
  font-weight: normal;
  text-align: center;
  padding: 0.35rem 1rem;
  background-color: ${colors.orange};
  color: white;
`
export const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, auto));
  column-gap: 2rem;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
`
export const LocationText = styled.div`
  font-size: ${fonts.lg};
  font-weight: normal;
`
