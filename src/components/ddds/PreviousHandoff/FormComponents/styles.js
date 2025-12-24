import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const ComponentHeader = styled.div`
  font-weight: 600;
  font-size: ${fonts.md};
  padding: 1rem 0 0.5rem;
`
export const Input = styled.input`
  border: none;
  font-size: ${fonts.md};
  padding: 0.9rem;
  &:disabled {
    background-color: ${colors.white};
  }
`
export const CustomTextInput = styled(Input)`
  margin-top: 2rem;
`
export const TextInputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  max-width: 41rem;
  align-items: center;
  border: 0.05rem solid ${colors.black};
  border-radius: 0.01rem;
`
