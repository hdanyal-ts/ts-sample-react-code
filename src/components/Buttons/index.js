import React from 'react'
import styled from 'styled-components'
import { colors } from '@design/colors'
import Link from 'next/link'
import { fonts } from '@design/fonts'
import { Icon } from '../Icon'

export { PrimaryButton, PageHeaderButton }

export const CustomButton = styled.button`
  font-size: ${fonts.lg};
  border: none;
  background-color: ${colors.brandYellow};
  color: ${colors.black};
  font-weight: bold;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.brandYellow};
  }
`
export const CustomLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`
export const TopRightButton = styled(PrimaryButton)`
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 2;
`
const CircleButton = styled.button`
  display: grid;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;
  ${({ color, $bgcolor, $bordercolor }) => `
    color: ${color ?? colors.black};
    background-color: ${$bgcolor ?? colors.brandYellow};
    border: 0.1rem solid ${$bordercolor ?? colors.yellow};
  `}
`

function PrimaryButton (props) {
  return <CustomButton {...props}>{props.label}</CustomButton>
}
function PageHeaderButton (props) {
  const { router, icon } = props
  const color = props?.color
  const bgColor = props?.bgColor
  const borderColor = props?.borderColor
  const isBackIcon = icon === 'ArrowBack'
  const buttonStyle = { cursor: isBackIcon ? 'pointer' : 'default' }
  const onClickBack = () => (isBackIcon ? router.back() : null)

  return (
    <CircleButton
      id='header-circle-button'
      color={color}
      $bgcolor={bgColor}
      $bordercolor={borderColor}
      style={buttonStyle}
      onClick={onClickBack}
    >
      <Icon icon={icon} color={color} />
    </CircleButton>
  )
}
