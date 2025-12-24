import React from 'react'
import LocationBadge from '../Badges/LocationBadge'
import { Body1, Title1, Title3 } from '../Text'
import EN_LABELS from '@public/content/english'
import MultiSelect from '../Dropdown/MultiSelect'
import { PrimaryButton } from '../Buttons'
import {
  TimesheetContainer,
  TimesheetHeading,
  PositionContainer
} from './styles'

export function CreateTimesheet (props) {
  const {
    dropdownOptions,
    onCreateTimesheet,
    plant,
    selectedPositions,
    setSelectedPositions,
    user
  } = props

  return (
    <TimesheetContainer>
      <TimesheetHeading id='timesheet-header'>
        <LocationBadge location={plant.plantAbrevation} />
        <Title1>
          {EN_LABELS['app.default.timesheet.greeting']} {user.name}
        </Title1>
        <Body1>{EN_LABELS['app.default.timesheet.message']}</Body1>
      </TimesheetHeading>
      <PositionContainer>
        <Title3>{EN_LABELS['app.default.timesheet.position']}</Title3>
        <MultiSelect
          id='position-dropdown'
          options={dropdownOptions}
          selectedOptions={selectedPositions}
          onChange={setSelectedPositions}
        />
        <PrimaryButton
          id='create-timesheet-button'
          label={EN_LABELS['app.default.button.continue']}
          onClick={onCreateTimesheet}
          disabled={selectedPositions.length === 0}
        />
      </PositionContainer>
    </TimesheetContainer>
  )
}
