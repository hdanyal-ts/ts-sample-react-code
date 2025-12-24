import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { FormInput } from '@components/Forms'

describe('FormInput component', async assert => {
  const testLabel = 'app.ddh.defect-log.button.sort'
  const testValue = 'form input value'
  const onChange = () => null

  const $ = render(
    <FormInput
      disabled={false}
      label={testLabel}
      onChange={onChange}
      value={testValue}
    />
  )

  assert({
    given: 'FormInput is passed input props',
    should: 'display input label',
    actual: $('.form-input-label').html().trim(),
    expected: 'SORT'
  })
  assert({
    given: 'FormInput is passed input props without placeholder',
    should: 'display default placeholder',
    actual: $('#form-input').children()[1].attribs.placeholder,
    expected: 'Please Complete'
  })
  assert({
    given: 'FormInput is passed input props',
    should: 'display input text value',
    actual: $('#form-input').children()[1].attribs.value,
    expected: testValue
  })
})
