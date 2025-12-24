import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import UserProfile from '@components/UserProfile'
import moment from 'moment'

describe('UserProfile component', async assert => {
  const testName = 'test user'
  const testSupervisor = 'test supervisor'
  const testDate = '2023-05-15T21:55:37Z'
  const testShift = '1'
  const testCrew = 'A'
  const testPositions = ['test pos 1', 'test pos 2']

  const $ = render(
    <UserProfile
      name={testName}
      supervisor={testSupervisor}
      date={testDate}
      shift={testShift}
      crew={testCrew}
      positions={testPositions}
    />
  )

  assert({
    given: 'UserProfile is passed account',
    should: 'display user name',
    actual: $('#name-field .profile-item-value').html().trim(),
    expected: testName.toUpperCase()
  })
  assert({
    given: 'UserProfile is passed account',
    should: 'display supervisor name',
    actual: $('#supervisor-field .profile-item-value').html().trim(),
    expected: testSupervisor.toUpperCase()
  })
  assert({
    given: 'UserProfile is passed account',
    should: 'display formatted shift date',
    actual: $('#date-field .profile-item-value').html().trim(),
    expected: moment(testDate).format('MM/DD/YYYY h:mm A')
  })
  assert({
    given: 'UserProfile is passed account',
    should: 'display user shift information',
    actual: $('#shift-field .profile-item-value').html().trim(),
    expected: testShift.toUpperCase()
  })
  assert({
    given: 'UserProfile is passed account',
    should: 'display user crew information',
    actual: $('#crew-field .profile-item-value').html().trim(),
    expected: testCrew.toUpperCase()
  })
  assert({
    given: 'UserProfile is passed account',
    should: 'display formatted user positions',
    actual: $('#positions-field .profile-item-value').html().trim(),
    expected: 'TEST POS 1, TEST POS 2'
  })
})
