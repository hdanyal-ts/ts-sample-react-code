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
import { colors } from '@design/colors'

const RECIPE_HEADERS = [
  EN_LABELS['app.default.table.header.sensor'],
  EN_LABELS['app.default.table.header.category'],
  EN_LABELS['app.default.table.header.low'],
  EN_LABELS['app.default.table.header.target'],
  EN_LABELS['app.default.table.header.high']
]
const PRODUCT_DETAIL_HEADERS = [
  EN_LABELS['app.default.table.header.sku'],
  EN_LABELS['app.default.table.header.description'],
  EN_LABELS['app.default.table.header.blanch'],
  EN_LABELS['app.default.table.header.color'],
  EN_LABELS['app.default.table.header.gravity'],
  EN_LABELS['app.default.table.header.average-length'],
  EN_LABELS['app.default.table.header.season']
]

export function RecipeTable ({ recipe }) {
  return (
    <TableWrapper>
      <TableHead>
        <Row className='recipe-table-header'>
          {RECIPE_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='recipe-table-body'>
        {recipe.sensors.map((item, index) => {
          return (
            <Row key={index}>
              <Cell>{item.name}</Cell>
              <Cell>{item.category}</Cell>
              <Cell>{item.low}</Cell>
              <Cell>{item.target}</Cell>
              <Cell>{item.high}</Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}
export function RecipeInfo ({ recipe }) {
  const headerStyle = { backgroundColor: colors.lightBlue, color: colors.black }
  return (
    <TableWrapper>
      <TableHead>
        <Row className='recipe-info-header'>
          {PRODUCT_DETAIL_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`} style={headerStyle}>
              {label.toUpperCase()}
            </HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='recipe-info-body'>
        <Row>
          <Cell>{recipe.sku}</Cell>
          <Cell>{recipe.description}</Cell>
          <Cell>{recipe.rawColor}</Cell>
          <Cell>{recipe.rawGravity}</Cell>
          <Cell>{recipe.blanchMode}</Cell>
          <Cell>{recipe.rawAverageLength}</Cell>
          <Cell>{recipe.season}</Cell>
        </Row>
      </TableBody>
    </TableWrapper>
  )
}
