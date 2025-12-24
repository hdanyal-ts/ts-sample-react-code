import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { TableContainer } from '@components/Table'
import { ProductsTable } from '@components/Table/Products/ProductsTable'
import { GET_PRODUCT_SKUS } from '@public/data/sample'
import { useRouter } from 'next/router'

export async function getStaticProps () {
  const title = EN_LABELS['app.ops.products.title']
  const data = GET_PRODUCT_SKUS.data
  return { props: { title, data } }
}
export default function CenterlineProductsPage ({ title, data }) {
  const router = useRouter()
  const onClickProduct = id => router.push(`/ops/products/${id}`)
  return (
    <PageWrapper id='products' title={title}>
      <TableContainer>
        <ProductsTable products={data.skus} onClickRow={onClickProduct} />
      </TableContainer>
    </PageWrapper>
  )
}

CenterlineProductsPage.getLayout = getSidebarLayout
