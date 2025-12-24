import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(0, auto));
  padding: 0.75rem;
  column-gap: 1.5rem;
  align-content: flex-start;
`
export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(0, auto));
  margin: 1rem 0;
`
export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(0, 4.5rem));
  padding: 0.75rem;
  column-gap: 1.5rem;
  align-items: flex-start;
`
