import React from 'react'
import { formatText } from '@utils/format'
import {
  EmptyBox,
  HeaderCell,
  Row,
  RowContainer,
  RowHeaderContainer,
  TableContainer,
  TableHeader
} from '../Table/styles'
import { StopCell } from './EquipmentStopRow'

function TotalStopsTable ({ item, positionName }) {
  return (
    <TableContainer>
      <RowContainer>
        <TableHeader>PROCESSING</TableHeader>
        <EmptyBox />
      </RowContainer>
      <RowContainer>
        <RowHeaderContainer col={3}>
          <HeaderCell>Total</HeaderCell>
          <HeaderCell>No. of Stops</HeaderCell>
          <HeaderCell>Downtime</HeaderCell>
        </RowHeaderContainer>
        <EmptyBox />
      </RowContainer>
      <TotalStopsRow
        label='PROCESSING'
        noStops={item.processingNoOfStops}
        downtime={item.processingDowntime}
      />
      <TotalStopsRow
        label={positionName}
        noStops={item.areaNoOfStops}
        downtime={item.areaDowntime}
      />
    </TableContainer>
  )
}
function TotalStopsRow ({ label, noStops, downtime }) {
  return (
    <RowContainer>
      <Row col={3}>
        <StopCell value={formatText(label)} />
        <StopCell value={noStops} />
        <StopCell value={downtime.toFixed(2)} badge='MIN' />
      </Row>
      <EmptyBox />
    </RowContainer>
  )
}

export default TotalStopsTable
