import React from 'react'
import EN_LABELS from '@public/content/english'
import { Tab } from '../../Buttons/PositionTabs/styles'
import {
  ActionButton,
  DefectActionsContainer,
  DefectFiltersContainer,
  DefectViewContainer
} from './styles'

const DEFECT_TABS = [
  {
    id: 'kanban-view-button',
    label: EN_LABELS['app.ddh.defect-log.view.board']
  },
  {
    id: 'list-view-button',
    label: EN_LABELS['app.ddh.defect-log.view.list']
  },
  {
    id: 'archive-view-button',
    label: EN_LABELS['app.ddh.defect-log.view.archive']
  }
]

function DefectActions ({ activeView, toggleFilter, toggleSort, toggleView }) {
  const composeViewTabs = (item, index) => (
    <Tab
      id={item.id}
      key={index}
      active={activeView === index}
      onClick={toggleView(index)}
    >
      {item.label}
    </Tab>
  )
  return (
    <DefectActionsContainer>
      <DefectViewContainer id='select-view-tabs'>
        {DEFECT_TABS.map(composeViewTabs)}
      </DefectViewContainer>
      <DefectFiltersContainer>
        <ActionButton id='filter-button' onClick={toggleFilter}>
          {EN_LABELS['app.ddh.defect-log.button.filter']}
        </ActionButton>
        <ActionButton id='sort-button' onClick={toggleSort}>
          {EN_LABELS['app.ddh.defect-log.button.sort']}
        </ActionButton>
      </DefectFiltersContainer>
    </DefectActionsContainer>
  )
}

export default DefectActions
