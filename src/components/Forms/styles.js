import { colors } from '@design/colors'
import { fonts } from '@design/fonts'
import styled from 'styled-components'

export const InputContainer = styled.div`
  display: grid;
  row-gap: 1rem;
  align-items: center;
  justify-self: flex-start;
  width: 100%;
  height: 8rem;
`
export const TextLabel = styled.div`
  font-weight: 500;
  font-size: ${fonts.sm};
`
export const TextHeader = styled(TextLabel)`
  font-weight: 500;
`
export const TextInput = styled.input`
  padding: 0.5rem 1rem;
  display: inline-block;
  border: 0.05rem solid ${colors.black};
  box-sizing: border-box;
  width: 100%;
  font-size: ${fonts.sm};
`
export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-flow: row;
  padding: 2rem;
  column-gap: 2rem;
  row-gap: 2rem;
`
