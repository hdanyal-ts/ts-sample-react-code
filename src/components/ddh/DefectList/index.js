import React from 'react'
import EN_LABELS from '@public/content/english'
import { ColumnLabel } from '../DefectKanban/styles'
import DefectListItem from './DefectListItem'
import { ListContainer, ListHeader, ListViewContainer } from './styles'

const LIST_HEADERS = [
  EN_LABELS['app.ddh.defect-log.header.date-identified'],
  EN_LABELS['app.ddh.defect-log.header.title'],
  EN_LABELS['app.ddh.defect-log.header.area'],
  EN_LABELS['app.ddh.defect-log.header.impact'],
  EN_LABELS['app.default.table.header.status']
]

function DefectList ({ id, defects }) {
  return (
    <ListViewContainer id={id}>
      <ListHeader id='list-headers'>
        {LIST_HEADERS.map((header, index) => (
          <ColumnLabel key={index}>{header}</ColumnLabel>
        ))}
      </ListHeader>
      <ListContainer>
        {defects.map((defect, index) => (
          <DefectListItem key={index} defect={defect} />
        ))}
      </ListContainer>
    </ListViewContainer>
  )
}
export default DefectList
