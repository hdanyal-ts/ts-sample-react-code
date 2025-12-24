import React from 'react'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import { Title1 } from '../Text'
import {
  ContentContainer,
  DefaultLayoutContainer,
  HeadingContainer,
  SidebarLayoutContainer,
  PageContainer,
  HuddleBoardLayoutContainer,
  PageTitleContainer
} from './styles'
import { useSelector } from 'react-redux'
import { PageHeaderButton } from '../Buttons'
import HuddleBoardNav from './HuddleBoardNav'

export { getDefaultLayout, getHuddleBoardLayout, getSidebarLayout }

function getDefaultLayout (page) {
  return <Layout id='app-layout'>{page}</Layout>
}
function getHuddleBoardLayout (page, { title, date }) {
  return (
    <HuddleBoardLayout id='app-layout' date={date} title={title}>
      {page}
    </HuddleBoardLayout>
  )
}
function getSidebarLayout (page, { title, icon = 'ArrowBack' }) {
  return (
    <SidebarLayout id='app-layout' title={title} icon={icon}>
      {page}
    </SidebarLayout>
  )
}
function HuddleBoardLayout ({ title, date, children }) {
  return (
    <HuddleBoardLayoutContainer>
      <HuddleBoardNav title={title} date={date} />
      {children}
    </HuddleBoardLayoutContainer>
  )
}
function Layout ({ children }) {
  return <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
}
function SidebarLayout ({ children }) {
  const { user, plant } = useSelector(state => state.account)
  if (user.id === null) return
  const account = user.accountType ?? 'N/A'
  const location = plant.plantAbrevation
  return (
    <SidebarLayoutContainer>
      <Sidebar account={account} location={location} name={user.name} />
      {children}
    </SidebarLayoutContainer>
  )
}
export function PageWrapper (props) {
  const { children, icon = 'ArrowBack', title } = props
  const router = useRouter()
  return (
    <PageContainer id={props?.id ?? 'page-container'}>
      <HeadingContainer>
        <PageTitleContainer>
          <PageHeaderButton router={router} icon={icon} />
          <Title1 id='page-title'>{title}</Title1>
        </PageTitleContainer>
        {props.component && props.component}
      </HeadingContainer>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  )
}
