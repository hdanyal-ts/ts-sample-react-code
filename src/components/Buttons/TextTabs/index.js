import React from 'react'
import { Tab, TabsContainer } from './styles'

function TextTabs ({ labels, active, onClickLabel }) {
  const onClickTab = index => onClickLabel(index)
  const renderTabs = (label, index) => (
    <Tab
      key={label}
      active={active === index}
      onClick={() => onClickTab(index)}
    >
      {label.toUpperCase()}
    </Tab>
  )
  return <TabsContainer id='text-tabs'>{labels.map(renderTabs)}</TabsContainer>
}

export default TextTabs
