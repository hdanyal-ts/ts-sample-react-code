import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { ProductsTable } from '@components/Table/Products/ProductsTable'
import { GET_PRODUCT_SKUS } from '@public/data/sample'

describe('ProductsTable component', async assert => {
  const products = GET_PRODUCT_SKUS.data.skus
  const $ = render(<ProductsTable products={products} />)

  assert({
    given: 'ProductsTable is passed products',
    should: 'display 5 header columns on the table',
    actual: $('.products-header').children().length,
    expected: 5
  })
  assert({
    given: 'ProductsTable is passed products',
    should: 'display 10 products on the table',
    actual: $('.products-body').children().length,
    expected: products.length
  })
})
