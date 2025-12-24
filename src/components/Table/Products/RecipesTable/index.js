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
import { formatDate } from '@utils/dates'

const RECIPES_HEADERS = [
  '#',
  EN_LABELS['app.default.table.header.color'],
  EN_LABELS['app.default.table.header.solids'],
  EN_LABELS['app.default.table.header.blanch'],
  EN_LABELS['app.default.table.header.average-length'],
  EN_LABELS['app.default.table.header.season'],
  EN_LABELS['app.default.table.header.last-updated'],
  EN_LABELS['app.default.table.header.action']
]

export function RecipesTable ({ recipes, onClickRow }) {
  const onClickRecipe = recipeId => () => onClickRow(recipeId)
  return (
    <TableWrapper>
      <TableHead>
        <Row className='recipes-header'>
          {RECIPES_HEADERS.map((label, i) => (
            <HeaderCell key={`${label}-${i}`}>{label.toUpperCase()}</HeaderCell>
          ))}
        </Row>
      </TableHead>
      <TableBody className='recipes-body'>
        {recipes.map((item, index) => {
          return (
            <Row key={index}>
              <Cell>{item.variation}</Cell>
              <Cell>{item.color}</Cell>
              <Cell>{item.gravity}</Cell>
              <Cell>{item.blanchMode}</Cell>
              <Cell>{item.averageLength}</Cell>
              <Cell>{item.season}</Cell>
              <Cell>{formatDate(item.updatedAt)}</Cell>
              <Cell onClick={onClickRecipe(item.recipeId)}>ACTION</Cell>
            </Row>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}
