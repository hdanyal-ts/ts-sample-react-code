import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { DeviationHistoryTable } from '@components/Table/DeviationHistoryTable'
import { TableContainer } from '@components/Table'
import { GET_DEVIATION_HISTORY } from '@public/data/sample'
import { useRouter } from 'next/router'

export async function getStaticProps () {
  const data = GET_DEVIATION_HISTORY.data
  const title = EN_LABELS['app.ops.deviation.history.title']
  return { props: { data, title } }
}
export default function DeviationHistoryPage ({ title, data }) {
  const router = useRouter()
  const onClickAction = id => router.push(`/ops/deviation/${id}`)
  return (
    <PageWrapper id='deviation-history' title={title}>
      <TableContainer>
        <DeviationHistoryTable
          deviations={data.deviations}
          onClickAction={onClickAction}
        />
      </TableContainer>
    </PageWrapper>
  )
}

DeviationHistoryPage.getLayout = getSidebarLayout
