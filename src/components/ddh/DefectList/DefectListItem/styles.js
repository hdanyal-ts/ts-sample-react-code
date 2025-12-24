import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: 1fr;
  width: 100%;
  align-items: center;
  justify-items: flex-start;
  column-gap: 1rem;
  height: 8rem;
  border-bottom: 0.1rem solid ${colors.grey};
  cursor: pointer;
  background-color: ${colors.lightGrey};
`
export const ListLabel = styled.div`
  font-size: ${fonts.md};
  font-weight: 500;
`
export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, minmax(0, 1fr));
  row-gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`
