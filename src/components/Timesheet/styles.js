import Image from 'next/image'
import styled from 'styled-components'
import { colors } from '@design/colors'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  background-color: ${colors.white};
`
export const TimesheetHeading = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  max-width: 40rem;
  justify-items: center;
  text-align: center;
`
export const TimesheetLogo = styled(Image)`
  width: 30rem;
  height: 15rem;
  padding: 0;
`
export const PositionContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`
export const TimesheetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`
