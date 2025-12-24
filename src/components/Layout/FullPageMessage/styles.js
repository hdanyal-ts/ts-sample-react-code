import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  background-color: ${colors.white};
  color: ${colors.black};
  text-align: left !important;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  height: 100%;
`
export const LabelContainer = styled.div`
  display: grid;
  max-height: 5rem;
  row-gap: 1.25rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
`
export const MessageLabel = styled.div`
  color: ${colors.black};
  font-size: ${fonts.xl};
`
