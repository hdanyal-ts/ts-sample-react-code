import React from 'react'
import { PageWrapper, getSidebarLayout } from '@components/Layout'
import EN_LABELS from '@public/content/english'
import { TableContainer } from '@components/Table'
import { GET_PRODUCT_RECIPES } from '@public/data/sample'
import { RecipesTable } from '@components/Table/Products/RecipesTable'
import { DetailContainer } from '@components/Table/Products/styles'
import { Label } from '@components/Text'
import { useRouter } from 'next/router'

export async function getStaticPaths () {
  return { paths: [], fallback: 'blocking' }
}
export async function getStaticProps () {
  const title = EN_LABELS['app.ops.product.title']
  const data = GET_PRODUCT_RECIPES.data
  return { props: { title, data } }
}
export default function ProductPage ({ title, data }) {
  const router = useRouter()
  const sku = `${EN_LABELS['app.default.table.header.sku']}: ${data.sku}`
  const description = `${EN_LABELS['app.default.table.header.description']}: ${data.description}`
  const totalRecipes = `${EN_LABELS['app.default.table.header.total-recipes']}: ${data.recipes.length}`
  const onClickRecipe = recipeId => router.push(`/ops/recipe/${recipeId}`)
  return (
    <PageWrapper id='product' title={title}>
      <TableContainer>
        <DetailContainer>
          <Label>{sku.toUpperCase()}</Label>
          <Label>{description.toUpperCase()}</Label>
          <Label>{totalRecipes.toUpperCase()}</Label>
        </DetailContainer>
        <RecipesTable recipes={data.recipes} onClickRow={onClickRecipe} />
      </TableContainer>
    </PageWrapper>
  )
}

ProductPage.getLayout = getSidebarLayout
