import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { RawAttributesTable } from '@components/Table/RawAttributes'
import { GET_BIN_ATTRIBUTES } from '@public/data/sample'

describe('RawAttributesTable component', async assert => {
  const rawAttributes = GET_BIN_ATTRIBUTES.data.bins
  const $ = render(<RawAttributesTable rawAttributes={rawAttributes} />)

  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display 12 header columns on the table',
    actual: $('.raw-attributes-header').children().length,
    expected: 12
  })
  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display 10 rows on the table',
    actual: $('.raw-attributes-body').children().length,
    expected: rawAttributes.length
  })
  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display white background color for first LOAD row',
    actual: $('.raw-attributes-body').children()[0].attribs.style,
    expected: 'background-color:#FFFFFF'
  })
  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display blue background color for second AVERAGE row',
    actual: $('.raw-attributes-body').children()[1].attribs.style,
    expected: 'background-color:#0756881A'
  })
  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display red background color for third EMPTY row',
    actual: $('.raw-attributes-body').children()[2].attribs.style,
    expected: 'background-color:#E031001A'
  })
  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display empty bin row',
    actual: $('.bin-average-row').children().hasClass('empty-bin-cell'),
    expected: true
  })
  assert({
    given: 'RawAttributesTable is passed raw attributes',
    should: 'display running bin row',
    actual: $('.bin-average-row').children().hasClass('active-bin-cell'),
    expected: true
  })
})
