import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { ProductionScheduleTable } from '@components/Table/ProductionSchedule'

describe('ProductionScheduleTable component', async assert => {
  const schedule = [
    {
      id: '1',
      startDate: '2023-08-10T15:07:27.478Z',
      sku: 'ABCDF',
      productDescription: 'McDonalds',
      line: 'FRY-L1'
    }
  ]
  const $ = render(<ProductionScheduleTable schedule={schedule} />)

  assert({
    given: 'ProductionScheduleTable is passed schedule',
    should: 'display 5 header columns on the table',
    actual: $('.production-schedule-header').children().length,
    expected: 5
  })
  assert({
    given: 'ProductionScheduleTable is passed processing schedule',
    should: 'display 1 row on the table',
    actual: $('.production-schedule-body').children().length,
    expected: schedule.length
  })
})
