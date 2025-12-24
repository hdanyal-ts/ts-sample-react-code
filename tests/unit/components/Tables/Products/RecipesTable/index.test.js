import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { RecipesTable } from '@components/Table/Products/RecipesTable'
import { GET_PRODUCT_RECIPES } from '@public/data/sample'

describe('RecipesTable component', async assert => {
  const recipes = GET_PRODUCT_RECIPES.data.recipes
  const $ = render(<RecipesTable recipes={recipes} />)

  assert({
    given: 'RecipesTable is passed recipes',
    should: 'display 8 header columns on the table',
    actual: $('.recipes-header').children().length,
    expected: 8
  })
  assert({
    given: 'RecipesTable is passed recipes',
    should: 'display 10 recipes on the table',
    actual: $('.recipes-body').children().length,
    expected: recipes.length
  })
})
