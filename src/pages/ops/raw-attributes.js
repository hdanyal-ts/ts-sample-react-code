import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { GET_BIN_ATTRIBUTES } from '@public/data/sample'
import { TableContainer } from '@components/Table'
import { RawAttributesTable } from '@components/Table/RawAttributes'

export async function getStaticProps () {
  const title = EN_LABELS['app.ops.raw-attributes.title']
  const data = GET_BIN_ATTRIBUTES.data
  return { props: { data, title } }
}
export default function RawAttributesPage ({ title, data }) {
  return (
    <PageWrapper id='raw-attributes' title={title}>
      <TableContainer>
        <RawAttributesTable rawAttributes={data.bins} />
      </TableContainer>
    </PageWrapper>
  )
}

RawAttributesPage.getLayout = getSidebarLayout
