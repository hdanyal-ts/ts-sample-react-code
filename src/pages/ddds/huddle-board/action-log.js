import React from 'react'
import { getHuddleBoardLayout } from '@components/Layout'

export async function getStaticProps () {
  const title = 'SPEC LINE'
  const date = 'OCT 24, 2023 | TUE'
  return { props: { title, date } }
}
export default function HuddleBoardActionLogPage () {
  return <div id='action-log'>HuddleBoardActionLog</div>
}

HuddleBoardActionLogPage.getLayout = getHuddleBoardLayout
