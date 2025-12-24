import React from 'react'
import { DEFECT_STATUS_COLORS } from '@design/colors'
import DefectCard from './DefectCard'
import {
  ColumnContainer,
  ColumnLabel,
  CountBadge,
  CounterContainer,
  GridContainer,
  KanbanContainer
} from './styles'

function DefectKanban ({ id, defects }) {
  const columns = getDefectColumns(defects)
  return (
    <KanbanContainer id={id}>
      <GridContainer id='kanban-headers'>
        {columns.map((item, index) => (
          <CounterContainer id='kanban-header-count' key={index}>
            <ColumnLabel>{item.label}</ColumnLabel>
            <CountBadge $bgcolor={item.color}>{item.total}</CountBadge>
          </CounterContainer>
        ))}
      </GridContainer>
      <GridContainer id='kanban-items' style={{ overflow: 'scroll' }}>
        {columns.map((item, cIndex) => (
          <ColumnContainer key={cIndex}>
            {item.cards.map((card, index) => (
              <DefectCard key={index} card={card} />
            ))}
          </ColumnContainer>
        ))}
      </GridContainer>
    </KanbanContainer>
  )
}
function getDefectColumns (defects) {
  return [
    {
      label: 'Identified',
      cards: defects.IDENTIFIED,
      total: defects.IDENTIFIED.length,
      color: DEFECT_STATUS_COLORS.IDENTIFIED
    },
    {
      label: 'Assigned',
      cards: defects.ASSIGNED,
      total: defects.ASSIGNED.length,
      color: DEFECT_STATUS_COLORS.ASSIGNED
    },
    {
      label: 'In Progress',
      cards: defects.IN_PROGRESS,
      total: defects.IN_PROGRESS.length,
      color: DEFECT_STATUS_COLORS.IN_PROGRESS
    },
    {
      label: 'Closed',
      cards: defects.CLOSED,
      total: defects.CLOSED.length,
      color: DEFECT_STATUS_COLORS.CLOSED
    }
  ]
}

export default DefectKanban
