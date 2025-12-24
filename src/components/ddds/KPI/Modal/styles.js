import styled from 'styled-components'
import { FontIcon } from '@fluentui/react'
import { colors } from '@design/colors'

export const Label = styled.div`
  display: grid;
  padding-left: 0.3rem;
  font-size: 1.6rem;
  text-align: start;
  font-weight: 400;
  ${props =>
    props.truncate
      ? `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  `
      : ''}
`
export const DateLabel = styled(Label)`
  display: grid;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  background-color: ${colors.black};
  height: 2.5rem;
  align-items: center;
  color: ${colors.brandYellow};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ModalHeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-bottom: 0.25rem solid ${colors.blueSecondary};
  align-items: center;
`
export const ModalHeaderBadgeContainer = styled.div`
  display: grid;
  grid-column: span 2;
  grid-row: span 1;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background-color: ${props => props.bgColor ?? colors.white};
`
export const ModalHeaderCloseButtonContainer = styled.div`
  display: grid;
  grid-column: span 3;
  grid-row: span 1;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
export const IconContainer = styled.div`
  display: grid;
  grid-area: 1 / 6 / 1 / auto;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid ${colors.blueSecondary};
  cursor: pointer;
`
export const Icon = styled(FontIcon)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${colors.blueSecondary};
`
export const ModalHeaderTitleContainer = styled.div`
  display: grid;
  grid-column: span 7;
  grid-row: span 1;
  align-items: center;
`
export const ModalHeaderBadgeLabel = styled.span`
  font-weight: 900;
  font-size: 4rem;
  color: ${colors.white};
  height: 100%;
`
export const ModalHeaderTitleLabel = styled.span`
  font-weight: 500;
  font-size: 2.5rem;
`
export const ModalContentContainer = styled.div`
  display: grid;
  padding: 3rem 0;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 1rem;
`
export const ModalContentTable = styled.div`
  display: grid;
  grid-column: 2 / span 14;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`
export const ModalContentTableRow = styled.div`
  display: grid;
  border: 0.05rem solid ${colors.grey};
  grid-template-columns: 4fr 8fr;
  grid-template-rows: 1fr;
`
export const ModalContentTableRowTitle = styled(Label)`
  display: grid;
  color: ${colors.mediumGrey};
  font-size: 1.5rem;
  font-weight: 400;
  align-items: center;
  padding: 1rem;
`
export const ModalContentTableRowDescription = styled(
  ModalContentTableRowTitle
)`
  display: grid;
  color: black;
  justify-content: space-between;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
`
export const ModalContentTableRowAttachments = styled(
  ModalContentTableRowTitle
)`
  display: grid;
  color: black;
  justify-content: space-between;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 2rem;
`
export const ModalImage = styled.img`
  display: grid;
  grid-column: span 3;
  grid-row: span 1;
  min-height: 100%;
  max-height: 20rem;
  max-width: 100%;
`
