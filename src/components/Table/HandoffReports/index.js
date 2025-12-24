import React from 'react'
import {
  Cell,
  CellButton,
  CellContainer,
  CellGridContainer,
  HeaderCell,
  Row,
  TableBody,
  TableHead,
  TableWrapper
} from '..'
import EN_LABELS from '@public/content/english'
import CellDropdown from '../../Dropdown/CellDropdown'
import { Icon } from '../../Icon'

const REPORTS_HEADERS = [
  EN_LABELS['app.default.table.header.date'],
  EN_LABELS['app.default.table.header.type'],
  EN_LABELS['app.default.table.header.shift'],
  EN_LABELS['app.default.table.header.request-status'],
  EN_LABELS['app.default.table.header.report-link']
]

export function HandoffReportsTable (props) {
  const {
    reports,
    reportType,
    reportShift,
    handleTypeChange,
    handleShiftChange
  } = props

  return (
    <TableWrapper>
      <TableHead>
        <Row>
          {REPORTS_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody>
        <ReportDownloadRow
          reportType={reportType}
          reportShift={reportShift}
          handleTypeChange={handleTypeChange}
          handleShiftChange={handleShiftChange}
        />
        {reports.map((item, index) => {
          return (
            <Row key={index}>
              <Cell>N/a</Cell>
              <Cell>N/a</Cell>
              <Cell>N/a</Cell>
              <Cell>N/a</Cell>
              <Cell>N/a</Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}

const TYPE_OPTIONS = [
  EN_LABELS['app.ddds.reports.type.handoff'],
  EN_LABELS['app.ddds.reports.type.defect']
]
const SHIFT_OPTIONS = [1, 2]

function ReportDownloadRow (props) {
  const { reportType, reportShift, handleTypeChange, handleShiftChange } = props
  const disabled = reportType === '' || reportShift === ''

  const composeShiftOption = item =>
    `${EN_LABELS['app.ddds.reports.type.shift']} ${item}`
  const shiftOptions = SHIFT_OPTIONS.map(composeShiftOption)

  const onDownloadReport = () => console.log('download report')

  return (
    <Row>
      <Cell>DATE SELECTOR</Cell>
      <CellContainer>
        <CellDropdown
          value={reportType}
          options={TYPE_OPTIONS}
          onChange={handleTypeChange}
        />
      </CellContainer>
      <CellContainer>
        <CellGridContainer>
          <CellDropdown
            value={reportShift}
            options={shiftOptions}
            onChange={handleShiftChange}
          />
          <CellButton disabled={disabled}>
            <Icon icon='Download' onClick={onDownloadReport} />
          </CellButton>
        </CellGridContainer>
      </CellContainer>
      <Cell />
      <Cell />
    </Row>
  )
}
