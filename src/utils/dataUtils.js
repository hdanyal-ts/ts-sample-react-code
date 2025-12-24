import React from 'react'
import { IoMdClose, IoMdCheckmark } from 'react-icons/io'
import { colors } from '@design/colors'

export { composeKPIProps, composePrevHandoffProps, groupDefectsByStatus }

const INITIAL_EQS = { totalStops: 0, totalDowntime: 0 }

function composeCIDCheck (cards) {
  const isCompleted = cards.filter(item => !item.isComplete).length === 0
  const iconStyle = { size: 35, color: colors.black }
  const Icon = isCompleted ? IoMdCheckmark : IoMdClose
  return <Icon {...iconStyle} />
}
const composePackEQS = (prev, curr) => {
  const totalStop = Number.parseInt(curr.responses[1].response)
  const totalStops = prev.totalStops + totalStop
  const downtimeDuration = Number.parseInt(curr.responses[2].response)
  const totalDowntime = prev.totalDowntime + downtimeDuration
  return { totalStops, totalDowntime }
}
function composeEquipmentStopSummary (cards) {
  const packagingStops = cards.find(item => item.type === 'TABLE')
  const processingStops = cards.find(item => item.type === 'STOPS_TOTAL_TABLE')
  if (packagingStops) {
    const rows = packagingStops?.rows ?? []
    const equipmentStops = rows?.reduce(composePackEQS, INITIAL_EQS)
    return `${equipmentStops.totalStops} / ${equipmentStops.totalDowntime}`
  }
  const totalStops = processingStops.areaNoOfStops
  const totalDowntime = Number.parseInt(processingStops.areaDowntime)
  return `${totalStops} / ${totalDowntime}`
}
function composeKPIProps (report) {
  switch (report.section) {
    case 'SFT':
      return { label: 'SAFETY', bgColor: colors.red }
    case 'QLT':
      return { label: 'QUALITY', bgColor: colors.blue }
    case 'DEL':
      return { label: 'DELIVERY', bgColor: colors.yellow }
    case 'CST':
      return { label: 'COST', bgColor: colors.green }
    case 'PPL':
      return { label: 'PEOPLE', bgColor: colors.purple }
    case 'ENV':
      return { label: 'ENVIRONMENT', bgColor: colors.blueTertiary }
    default:
      return { label: 'OTHER', bgColor: colors.grey }
  }
}
function composePrevHandoffProps (positionName) {
  return section => {
    switch (section.type) {
      case 'SFT':
        return {
          badge: 'S',
          label: 'SAFETY',
          section: section.type,
          borderColor: colors.red,
          backgroundColor: colors.lightRed,
          summary: getReportedSummary(section.cards),
          cards: section.cards,
          grid: section.grid
        }
      case 'QLT':
        return {
          badge: 'Q',
          label: 'QUALITY',
          section: section.type,
          borderColor: colors.blue,
          backgroundColor: colors.lightBlue,
          summary: getReportedSummary(section.cards),
          cards: section.cards,
          grid: section.grid
        }
      case 'ISS':
        return {
          label: 'OTHER ISSUES',
          section: section.type,
          borderColor: colors.mediumGrey,
          backgroundColor: colors.lightGrey,
          cards: section.cards,
          grid: section.grid
        }
      case 'CLD':
        return {
          badge: 'D',
          label: 'CENTERLINE DEVIATIONS',
          section: section.type,
          borderColor: colors.yellow,
          backgroundColor: colors.lightYellow,
          summary: getReportedSummary(section.cards),
          cards: section.cards,
          grid: section.grid
        }
      case 'CID':
        return {
          badge: 'D',
          label: 'CID',
          section: section.type,
          borderColor: colors.yellow,
          backgroundColor: colors.lightYellow,
          summary: composeCIDCheck(section.cards),
          cards: section.cards,
          grid: section.grid
        }
      case 'EQS':
        return {
          badge: 'D',
          label: 'EQUIPMENT STOPS',
          positionName,
          section: section.type,
          borderColor: colors.yellow,
          backgroundColor: colors.lightYellow,
          summary: composeEquipmentStopSummary(section.cards),
          cards: section.cards,
          grid: section.grid
        }
      case 'EQD':
        return {
          badge: 'D',
          label: 'EQUIPMENT DEFECTS',
          section: section.type,
          borderColor: colors.yellow,
          backgroundColor: colors.lightYellow,
          summary: getReportedSummary(section.cards),
          cards: section.cards,
          grid: section.grid
        }
      case 'DEL':
        return {
          badge: 'D',
          label: 'DELIVERY',
          section: section.type,
          borderColor: colors.yellow,
          backgroundColor: colors.lightYellow,
          cards: section.cards,
          grid: section.grid
        }
      case 'CST':
        return {
          badge: 'C',
          label: 'COST',
          section: section.type,
          borderColor: colors.green,
          backgroundColor: colors.lightGreen,
          cards: section.cards,
          grid: section.grid
        }
      case 'PPL':
        return {
          badge: 'P',
          label: 'PEOPLE',
          section: section.type,
          borderColor: colors.purple,
          backgroundColor: colors.lightPurple,
          cards: section.cards,
          grid: section.grid
        }
      case 'ENV':
        return {
          badge: 'E',
          label: 'ENVIRONMENT',
          section: section.type,
          borderColor: colors.blueTertiary,
          backgroundColor: colors.lightBlueTertiary,
          cards: section.cards,
          grid: section.grid
        }
      default:
        return null
    }
  }
}
function getReportedSummary (cards) {
  const reportedCards = cards.find(item => item.type === 'REPORTED').cards
  return reportedCards.length.toString()
}
export function groupCardsByArea (data) {
  const groupedData = data.reduce((result, item) => {
    const area = item.area
    const existingGroup = result.find(group => group.area === area)
    if (existingGroup) {
      existingGroup.cards.push(item)
    } else {
      result.push({ area, cards: [item] })
    }
    return result
  }, [])
  return groupedData
}
function groupDefectsByStatus (defects) {
  const groupedDefects = defects.reduce(
    (result, defect) => {
      const { status } = defect
      result[status].push(defect)
      return result
    },
    { IDENTIFIED: [], ASSIGNED: [], IN_PROGRESS: [], CLOSED: [] }
  )

  return groupedDefects
}
