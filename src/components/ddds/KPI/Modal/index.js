import * as React from 'react'
import { Panel, PanelType } from '@fluentui/react'
import {
  ModalHeaderContainer,
  Icon,
  IconContainer,
  ModalContentContainer,
  ModalHeaderCloseButtonContainer,
  ModalHeaderTitleContainer,
  ModalHeaderTitleLabel,
  ModalHeaderBadgeContainer,
  ModalHeaderBadgeLabel
} from './styles'
import { ContentTable } from './Content'
import { colors } from '@design/colors'

const getSectionProps = section => {
  switch (section) {
    case 'SFT':
      return {
        title: 'Safety Incidents',
        badgeColor: colors.red,
        badgeTitle: 'S'
      }
    case 'QLT':
      return {
        title: 'Food Safety/Quality Incidents',
        badgeColor: colors.blue,
        badgeTitle: 'Q'
      }
    default:
      return {
        title: 'Incidents',
        badgeColor: colors.brandYellow,
        badgeTitle: 'I'
      }
  }
}

export function Modal ({
  reports = [],
  section = 'SFT',
  onClose = () => {},
  isOpen = false
}) {
  const { title, badgeColor, badgeTitle } = getSectionProps(section)
  return (
    <Panel
      isOpen={isOpen}
      type={PanelType.custom}
      customWidth='50%'
      hasCloseButton={false}
      styles={{ content: { padding: 0, overflow: 'hidden' } }}
    >
      <ModalHeaderContainer>
        <ModalHeaderBadgeContainer bgColor={badgeColor}>
          <ModalHeaderBadgeLabel>{badgeTitle}</ModalHeaderBadgeLabel>
        </ModalHeaderBadgeContainer>
        <ModalHeaderTitleContainer>
          <ModalHeaderTitleLabel>{title}</ModalHeaderTitleLabel>
        </ModalHeaderTitleContainer>
        <ModalHeaderCloseButtonContainer>
          <IconContainer onClick={onClose}>
            <Icon aria-label='close' iconName='Cancel' />
          </IconContainer>
        </ModalHeaderCloseButtonContainer>
      </ModalHeaderContainer>
      <ModalContentContainer>
        {reports.map(report => (
          <ContentTable key={report.id} report={report} />
        ))}
      </ModalContentContainer>
    </Panel>
  )
}
