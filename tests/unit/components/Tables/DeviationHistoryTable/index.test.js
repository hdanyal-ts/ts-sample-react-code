import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { GET_DEVIATION_HISTORY } from '@public/data/sample'
import { DeviationHistoryTable } from '@components/Table/DeviationHistoryTable'

const noop = () => null

describe('DeviationHistoryTable component', async assert => {
  const deviations = GET_DEVIATION_HISTORY.data.deviations

  const $ = render(
    <DeviationHistoryTable onClickAction={noop} deviations={deviations} />
  )

  assert({
    given: 'DeviationHistoryTable is passed deviations',
    should: 'display 9 header columns on the table',
    actual: $('.deviation-history-header').children().length,
    expected: 9
  })
  assert({
    given: 'DeviationHistoryTable is passed deviations',
    should: 'display 6 deviation rows on the table',
    actual: $('.deviation-history-body').children().length,
    expected: deviations.length
  })
})
