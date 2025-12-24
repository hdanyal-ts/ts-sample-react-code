import React from 'react'
import describe from 'riteway'
import render from 'riteway/render-component'
import { RecipeInfo, RecipeTable } from '@components/Table/Products/RecipeTable'
import { GET_RECIPE } from '@public/data/sample'

describe('RecipeTable component', async assert => {
  const recipe = GET_RECIPE.recipe
  const $ = render(<RecipeTable recipe={recipe} />)

  assert({
    given: 'RecipeTable is passed a recipe',
    should: 'display 5 header columns on the table',
    actual: $('.recipe-table-header').children().length,
    expected: 5
  })
  assert({
    given: 'RecipeTable is passed a recipe',
    should: 'display 9 measurements on the table',
    actual: $('.recipe-table-body').children().length,
    expected: recipe.sensors.length
  })
})
describe('RecipeInfo component', async assert => {
  const recipe = GET_RECIPE.recipe
  const $ = render(<RecipeInfo recipe={recipe} />)

  const detailText = $('.recipe-info-body').children().text()

  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display 5 header columns on the table',
    actual: $('.recipe-info-header').children().length,
    expected: 7
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display 1 detail row on the table',
    actual: $('.recipe-info-body').children().length,
    expected: 1
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe sku',
    actual: detailText.includes(recipe.sku),
    expected: true
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe description',
    actual: detailText.includes(recipe.description),
    expected: true
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe blanch mode',
    actual: detailText.includes(recipe.blanchMode),
    expected: true
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe color',
    actual: detailText.includes(recipe.rawColor),
    expected: true
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe gravity',
    actual: detailText.includes(recipe.rawGravity),
    expected: true
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe average length',
    actual: detailText.includes(recipe.rawAverageLength),
    expected: true
  })
  assert({
    given: 'RecipeInfo is passed a recipe',
    should: 'display recipe season',
    actual: detailText.includes(recipe.season),
    expected: true
  })
})
