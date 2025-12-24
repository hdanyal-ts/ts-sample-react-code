import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { TableContainer } from '@components/Table'
import {
  RecipeInfo,
  RecipeTable
} from '@components/Table/Products/RecipeTable'
import { GET_RECIPE } from '@public/data/sample'
import { Heading1 } from '@components/Text'
import { PrimaryButton } from '@components/Buttons'
import styled from 'styled-components'

const AssetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
`

export async function getStaticPaths () {
  return { paths: [], fallback: 'blocking' }
}
export async function getStaticProps () {
  const title = EN_LABELS['app.ops.recipe.title']
  const data = GET_RECIPE
  return { props: { title, data } }
}
export default function RecipePage ({ title, data }) {
  const recipe = data.recipe
  return (
    <PageWrapper id='recipe' title={title}>
      <TableContainer>
        <RecipeInfo recipe={recipe} />
        <AssetContainer>
          <Heading1>{recipe.assetName}</Heading1>
          <PrimaryButton label={recipe.assetName} />
        </AssetContainer>
        <RecipeTable recipe={recipe} />
      </TableContainer>
    </PageWrapper>
  )
}

RecipePage.getLayout = getSidebarLayout
