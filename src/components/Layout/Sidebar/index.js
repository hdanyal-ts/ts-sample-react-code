import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsChevronUp, BsChevronRight } from 'react-icons/bs'
import styled from 'styled-components'
import {
  ChildLinkContainer,
  HeadingContainer,
  YellowIcon,
  LinkLabel,
  LinksContainer,
  LogoContainer,
  SidebarChildLinkContainer,
  SidebarContainer,
  SidebarLinkContainer,
  UserContainer,
  UserImage,
  UserInfo
} from './styles'
import LocationBadge from '../../Badges/LocationBadge'
import { CustomLink } from '../../Buttons'
import { Icon } from '../../Icon'
import { Body2, Body3, Caption } from '../../Text'
import { colors } from '@design/colors'
import companyLogo from '@public/assets/images/company-logo.svg'
import { NAVIGATION_ITEMS } from '@utils/constant'

const SidebarLogo = styled(Image)`
  width: 13rem;
  height: 8rem;
  padding: 0;
`
function Sidebar ({ account, location, name }) {
  const [expandedSection, setExpandedSection] = useState(null)
  const router = useRouter()
  const composeSidebarItems = (item, index) => (
    <SidebarItem
      key={index}
      id={item.id}
      router={router}
      expandedSection={expandedSection}
      setExpandedSection={setExpandedSection}
      index={index}
      {...item}
    />
  )
  return (
    <SidebarContainer id='sidebar'>
      <HeadingContainer>
        <LogoContainer>
          <SidebarLogo src={companyLogo} alt='Company Logo' />
        </LogoContainer>
        <LocationBadge location={location} />
        <UserContainer>
          <UserImage />
          <UserInfo>
            <Body2 style={{ fontWeight: 600 }}>{name}</Body2>
            <Body3 style={{ color: colors.black }}>{account}</Body3>
          </UserInfo>
        </UserContainer>
      </HeadingContainer>
      <LinksContainer>
        {NAVIGATION_ITEMS.map(composeSidebarItems)}
      </LinksContainer>
    </SidebarContainer>
  )
}
function SidebarItem (props) {
  const { router, index, expandedSection, label, setExpandedSection } = props
  const links = props?.links ?? []
  const childActive = links.map(item => item.href).includes(router.pathname)
  const isActive = router.pathname === props.href || childActive
  const isParent = links.length > 0
  const expanded = expandedSection === index
  const chevronColor = childActive ? colors.brandYellow : colors.grey
  const Chevron = expanded ? BsChevronUp : BsChevronRight
  const onClickLink = () => {
    const section = expanded ? null : index
    setExpandedSection(section)
    if (!isParent) router.push(props.href)
  }
  return (
    <>
      <SidebarLinkContainer
        id={props.id}
        $active={isActive}
        onClick={onClickLink}
      >
        <YellowIcon>
          <Icon icon={props.icon} />
        </YellowIcon>
        <Caption>{label}</Caption>
        {isParent && (
          <LinkLabel>
            <Chevron color={chevronColor} size={25} />
          </LinkLabel>
        )}
      </SidebarLinkContainer>
      {expanded && (
        <ChildLinkContainer>
          {links.map((link, index) => {
            const active = router.pathname === link.href
            return (
              <CustomLink
                id={link.id}
                key={`${link.label}-${index}`}
                href={link.href}
              >
                <SidebarChildLinkContainer $active={active}>
                  <Caption>{link.label}</Caption>
                </SidebarChildLinkContainer>
              </CustomLink>
            )
          })}
        </ChildLinkContainer>
      )}
    </>
  )
}

export default Sidebar
