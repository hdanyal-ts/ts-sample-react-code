import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import { GET_DEVIATION_HISTORY } from '@public/data/sample'
import EN_LABELS from '@public/content/english'
import { TableContainer } from '@components/Table'
import {
  CAUSE_OPTIONS,
  FormDropdown,
  FormInput,
  JUSTIFICATION_OPTIONS
} from '@components/Forms'
import { FormContainer } from '@components/Forms/styles'

export async function getStaticPaths () {
  return { paths: [], fallback: 'blocking' }
}
export async function getStaticProps () {
  const title = EN_LABELS['app.ops.deviation.id.title']
  const data = GET_DEVIATION_HISTORY.data
  return { props: { title, data } }
}
export default function DeviationPage ({ title, data }) {
  const [isJustified, setJustified] = useState({ value: null })
  const [cause, setCause] = useState({ value: null })
  const [action, setAction] = useState('')
  const [reason, setReason] = useState('')

  const router = useRouter()
  const compareDeviation = item => item.id === router.query.id
  const deviation = data.deviations.find(compareDeviation)

  const onChangeAction = e => {
    e.preventDefault()
    setAction(e.target.value)
  }
  const onChangeReason = e => {
    e.preventDefault()
    setReason(e.target.value)
  }

  if (deviation.reported) {
    return <p>Deviation for {deviation.sensorName} already reported.</p>
  }
  return (
    <PageWrapper id='deviation-report' title={title}>
      <TableContainer>
        <FormContainer>
          <FormInput
            label='app.default.table.header.parameter'
            value={`${deviation.sensorName} [${deviation.assetName}]`}
            disabled
          />
          <FormInput
            label='app.ops.deviation.form.setting'
            value={deviation.deviation}
            disabled
          />
          <FormDropdown
            label='app.ops.deviation.form.justified'
            placeholder='app.default.dropdown.default-placeholder'
            options={JUSTIFICATION_OPTIONS}
            value={isJustified}
            onChange={setJustified}
          />
          {isJustified.value === true && (
            <FormInput
              label='app.ops.deviation.form.reason'
              onChange={onChangeReason}
              value={reason}
            />
          )}
          {isJustified.value === false && (
            <FormDropdown
              label='app.ops.deviation.form.cause'
              placeholder='app.default.dropdown.default-placeholder'
              options={CAUSE_OPTIONS}
              value={cause}
              onChange={setCause}
            />
          )}
          {isJustified.value === false && cause.value && (
            <FormInput
              label='app.ops.deviation.form.action'
              onChange={onChangeAction}
              value={action}
            />
          )}
        </FormContainer>
      </TableContainer>
    </PageWrapper>
  )
}

DeviationPage.getLayout = getSidebarLayout
