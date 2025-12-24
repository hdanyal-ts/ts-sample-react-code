import React, { useState } from 'react'
import { Tab, TabsContainer } from './styles'
import { GET_TIMESHEET } from '@public/data/sample'

function PositionTabs () {
  const [activeIndex, setActiveIndex] = useState(0)
  const onClickTab = index => setActiveIndex(index)
  const positions = GET_TIMESHEET.timesheet.positions.map(item => item.name)
  const renderTabs = (position, index) => (
    <Tab
      key={position}
      active={activeIndex === index}
      onClick={() => onClickTab(index)}
    >
      {position.toUpperCase()}
    </Tab>
  )
  return (
    <TabsContainer id='position-tabs'>
      {positions.map(renderTabs)}
    </TabsContainer>
  )
}

export default PositionTabs
