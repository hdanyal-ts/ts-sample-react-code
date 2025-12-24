import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { GET_LIVE_SCHEDULE } from '@public/data/sample'
import { LiveScheduleTable } from '@components/Table/LiveSchedule'

describe('LiveScheduleTable component', async assert => {
  const schedule = GET_LIVE_SCHEDULE.processing.schedule

  const $ = render(<LiveScheduleTable schedule={schedule} />)

  assert({
    given: 'LiveScheduleTable is passed schedule',
    should: 'display 5 header columns on the table',
    actual: $('.live-schedule-header').children().length,
    expected: 5
  })
  assert({
    given: 'LiveScheduleTable is passed processing schedule',
    should: 'display 2 rows on the table',
    actual: $('.live-schedule-body').children().length,
    expected: schedule.length
  })
})
