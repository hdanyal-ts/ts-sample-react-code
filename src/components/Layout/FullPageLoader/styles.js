import styled, { keyframes } from 'styled-components'
import { fonts } from '@design/fonts'
import { colors } from '@design/colors'
import { Container } from '../styles'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const Spinner = styled.div`
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
  border-top: 0.5rem solid ${colors.blueSecondary};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 2s linear infinite;
`
export const LoadingContainer = styled(Container)`
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  height: 100vh;
`
export const LoadingContentContainer = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 2rem;
`
export const LoadingLabel = styled.div`
  color: ${colors.black};
  font-size: ${fonts.sm};
  font-weight: 500;
`
