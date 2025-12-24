import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 1rem;
  margin-top: 1rem;
`
export const DetailItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 0.3rem;
  grid-column: ${({ column }) => column};
`
export const DetailLabel = styled.div`
  color: ${colors.mediumGrey};
  font-weight: 400;
  font-size: ${fonts.md};
`
export const DetailText = styled.div`
  color: ${colors.black};
  font-weight: 500;
  font-size: ${fonts.md};
`
export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  padding: 0.75rem;
`
