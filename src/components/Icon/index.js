import React from 'react'
import {
  AiFillCalendar,
  AiFillEye,
  AiFillWarning,
  AiOutlineArrowLeft,
  AiOutlineArrowRight
} from 'react-icons/ai'
import { FaArrowDown, FaArrowUp, FaNewspaper } from 'react-icons/fa'
import { LiaDownloadSolid } from 'react-icons/lia'
import { HiUsers } from 'react-icons/hi2'
import { IoMdSettings, IoIosArrowBack, IoMdCheckmark, IoMdClose } from 'react-icons/io'
import { MdBlock, MdLogout, MdOutlineFlag } from 'react-icons/md'
import { colors } from '@design/colors'

const ICON_SIZE = 32

export function Icon ({ icon, color = colors.black, iconSize }) {
  const size = iconSize ?? ICON_SIZE
  const CustomIcon = composeIcon(icon)
  return <CustomIcon size={size} color={color} />
}

const composeIcon = icon => {
  switch (icon) {
    case 'ArrowBack':
      return IoIosArrowBack
    case 'ArrowDown':
      return FaArrowDown
    case 'ArrowLeft':
      return AiOutlineArrowLeft
    case 'ArrowUp':
      return FaArrowUp
    case 'ArrowRight':
      return AiOutlineArrowRight
    case 'Block':
      return MdBlock
    case 'Centerline':
      return AiFillEye
    case 'Checkmark':
      return IoMdCheckmark
    case 'Close':
      return IoMdClose
    case 'Download':
      return LiaDownloadSolid
    case 'Flag':
      return MdOutlineFlag
    case 'HuddleBoard':
      return HiUsers
    case 'Logout':
      return MdLogout
    case 'Reports':
      return FaNewspaper
    case 'Schedule':
      return AiFillCalendar
    case 'Settings':
      return IoMdSettings
    case 'Warning':
      return AiFillWarning
    default:
      return <></>
  }
}
