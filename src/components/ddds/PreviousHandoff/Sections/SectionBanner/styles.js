import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const SectionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
`
export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: 3.5rem;
  ${props => `
    border: 0.1rem solid ${props.bordercolor};
    background-color: ${props.bgcolor};
  `}
`
export const SectionLabelContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.4rem;
  padding-left: 0.25rem;
`
export const SectionBadge = styled.div`
  display: grid;
  width: 3rem;
  height: 3rem;
  ${props => `
    color: ${props.color};
    background-color: ${props.bgcolor};
  `}
  font-weight: 700;
  font-size: ${fonts.xl};
  align-items: center;
  justify-content: center;
`
export const SectionLabel = styled.div`
  color: ${colors.black};
  font-weight: 500;
  font-size: ${fonts.lg};
  padding-left: 0.25rem;
`
export const SectionChevron = styled.div`
  display: grid;
  align-self: center;
  justify-self: flex-end;
  margin-right: 1rem;
`
export const SummaryBadge = styled.div`
  display: grid;
  padding: 0.25rem 1rem;
  height: 2rem;
  width: 6rem;
  margin-right: 0.5rem;
  font-size: ${fonts.lg};
  font-weight: 600;
  align-self: center;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  ${props => `
    color: ${props.color};
    background-color: ${props.bgcolor};
  `}
`
