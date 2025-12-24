import React from 'react'
import {
  Cell,
  HeaderCell,
  Row,
  TableBody,
  TableHead,
  TableWrapper
} from '../..'
import EN_LABELS from '@public/content/english'

const SKU_HEADERS = [
  EN_LABELS['app.default.table.header.sku'],
  EN_LABELS['app.default.table.header.description'],
  EN_LABELS['app.default.table.header.line'],
  EN_LABELS['app.default.table.header.total-recipes'],
  EN_LABELS['app.default.table.header.action']
]

export function ProductsTable ({ products, onClickRow }) {
  return (
    <TableWrapper id='products-table'>
      <TableHead>
        <Row className='products-header'>
          {SKU_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='products-body'>
        {products.map((item, index) => {
          const onClickProduct = () => onClickRow(item.productId)
          return (
            <Row key={index}>
              <Cell>{item.sku}</Cell>
              <Cell>{item.description}</Cell>
              <Cell>{item.productionLine}</Cell>
              <Cell>{item.totalRecipes}</Cell>
              <Cell onClick={onClickProduct}>ACTION</Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}
