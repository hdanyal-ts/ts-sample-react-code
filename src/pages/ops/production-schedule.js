import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { TableContainer } from '@components/Table'
import { ProductionScheduleTable } from '@components/Table/ProductionSchedule'

export async function getStaticProps () {
  const title = EN_LABELS['app.ops.production-schedule.title']
  const data = [
    {
      id: '1',
      startDate: '2023-08-10T15:07:27.478Z',
      sku: 'ABCDF',
      productDescription: 'McDonalds',
      line: 'FRY-L1'
    }
  ]
  return { props: { title, data } }
}
export default function ProductionSchedulePage ({ title, data }) {
  return (
    <PageWrapper id='production-schedule' title={title}>
      <TableContainer>
        <ProductionScheduleTable schedule={data} />
      </TableContainer>
    </PageWrapper>
  )
}

ProductionSchedulePage.getLayout = getSidebarLayout
