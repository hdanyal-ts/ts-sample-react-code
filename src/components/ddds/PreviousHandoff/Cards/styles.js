import styled from 'styled-components'
import { colors } from '@design/colors'
import { fonts } from '@design/fonts'

const activeFlagStyle = `
  border: 0.1rem solid ${colors.blueSecondary};
  background-color: ${colors.blueSecondary};
`
const inactiveFlagStyle = `
  border: 0.1rem solid ${colors.black};
`
const disableFlagStyle = `
  border: 0.1rem solid ${colors.lightGrey};
  background-color: ${colors.lightGrey};
  cursor: not-allowed;
`

export const CardBadge = styled.div`
  display: grid;
  text-align: center;
  justify-self: flex-end;
  font-size: ${fonts.md};
  align-items: center;
  padding: 0.25rem 1.2rem;
  margin-right: 0.5rem;
  ${props => `
    background-color: ${props.backgroundColor};
    color: ${props.color};
  `}
`
export const CardLabel = styled.div`
  display: grid;
  text-align: start;
  color: ${({ color }) => color};
`
export const CardLabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.5rem;
`
export const CardRowContainer = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  grid-template-rows: 1fr;
  min-height: 2rem;
  border: 0.05rem solid ${colors.darkGrey};
`
export const CardRowCol = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  padding: 0.5rem 0;
`
export const ReportContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, auto);
  grid-template-rows: 1fr auto;
  column-gap: 0.75rem;
  align-items: center;
  justify-content: center;
`
export const TargetIcon = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey};
  height: 100%;
  padding: 0.15rem;
  width: 2rem;
  ${props => `
    background-color: ${props.color};
    cursor: ${props.cursor ?? 'auto'};
  `}
`
export const TargetValueContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  padding-right: 0.5rem;
  width: 15rem;
  justify-self: flex-end;
`
export const TargetValueLabel = styled.div`
  display: grid;
  text-align: center;
  background-color: ${colors.black};
  align-items: center;
  height: 100%;
  padding: 0.15rem;
  font-size: ${fonts.lg};
  color: ${colors.brandYellow};
`
export const FlagBox = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: ${colors.white};
  border: 0.1rem solid ${colors.black};
  cursor: pointer;
  ${({ disabled, flagged }) =>
    disabled ? disableFlagStyle : flagged ? activeFlagStyle : inactiveFlagStyle}
`
export const CIDContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  border: 0.1rem solid ${colors.grey};
  align-items: center;
  justify-content: space-between;
  padding: 0.15rem;
  margin: 0.5rem 0;
`
export const CIDLabel = styled.div`
  font-weight: 400;
  margin-left: 1rem;
  font-size: ${fonts.md};
  color: ${colors.black};
`
export const CIDIcon = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  width: 3rem;
  height: 3rem;
  color: white;
`
