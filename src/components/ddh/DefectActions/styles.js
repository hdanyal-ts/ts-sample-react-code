import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

export const DefectActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
`
export const DefectViewContainer = styled.div`
  display: grid;
  font-weight: 500;
  font-size: ${fonts.sm};
  text-align: center;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  margin: 0;
  height: 4rem;
  width: 100%;
`
export const DefectFiltersContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, minmax(0, 10rem));
  grid-template-rows: 1fr;
  justify-content: flex-end;
  height: 4rem;
  column-gap: 2rem;
`
export const ActionButton = styled.button`
  font-weight: bold;
  font-size: ${fonts.lg};
  background-color: ${colors.white};
  color: ${colors.blueSecondary};
  border: 0.15rem solid ${colors.blueSecondary};
  cursor: pointer;
  &:hover {
    background-color: ${colors.blueSecondary};
    color: ${colors.white};
  }
`
