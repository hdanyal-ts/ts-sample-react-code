import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { GET_SETPOINTS } from '@public/data/sample'
import { CenterlineTable } from '@components/Table/CenterlineTable'

const MOCK_SETPOINTS = GET_SETPOINTS['Cutter Deck [FRY]']

describe('CenterlineTable component', async assert => {
  const setpoints = MOCK_SETPOINTS.data.setpoints

  const $ = render(<CenterlineTable setpoints={setpoints} />)

  assert({
    given: 'CenterlineMonitor is passed setpoints',
    should: 'display 6 header columns on the table',
    actual: $('.ops-overview-header').children().length,
    expected: 6
  })
  assert({
    given: 'CenterlineMonitor is passed setpoints',
    should: 'display 9 measurement rows on the table',
    actual: $('.ops-overview-body').children().length,
    expected: setpoints.measurements.length
  })
  assert({
    given: 'CenterlineMonitor is passed setpoints',
    should: 'display red background for deviation on first row',
    actual: $('.ops-overview-body').children()[0].attribs.style,
    expected: 'background-color:#E0310040'
  })
  assert({
    given: 'CenterlineMonitor is passed setpoints',
    should: 'display white background for valid measurement on second row',
    actual: $('.ops-overview-body').children()[1].attribs.style,
    expected: 'background-color:#FFFFFF'
  })
  assert({
    given: 'CenterlineMonitor is passed setpoints',
    should: 'display white background for measurement with no range',
    actual: $('.ops-overview-body').children()[2].attribs.style,
    expected: 'background-color:#FFFFFF'
  })
})
