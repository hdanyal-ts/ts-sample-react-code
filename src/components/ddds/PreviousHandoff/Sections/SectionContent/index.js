import React from 'react'
import { ComponentWrapper, ContentContainer } from './styles'
import { Header, TextInput } from '../../FormComponents'
import Table, { PackagingTotalTable } from '../../FormComponents/Table'
import ReportedCards from '../../Cards/ReportedCards'
import { EquipmentStops } from '../../FormComponents/EquipmentStops'
import TotalStopsTable from '../../FormComponents/EquipmentStops/TotalStopsTable'
import { Column } from '../../../../Layout/styles'
import { CIDCard } from '../../Cards'

export const STATIC_TEXT_FIELDS = [
  'DATE',
  'DATE_TIME',
  'NUMBER_INPUT',
  'SELECT',
  'TEXT_INPUT',
  'RADIO',
  'TIME'
]

function SectionContent (props) {
  const { section } = props
  const grid = section?.grid

  return (
    <ContentContainer>
      <ComponentWrapper customgrid={grid}>
        {section.cards.map(composeComponent(section))}
      </ComponentWrapper>
    </ContentContainer>
  )
}
function composeComponent (section) {
  return item => {
    const key = item.id
    const hideFlag = ['DEL', 'CST', 'ENV'].includes(section.section)
    const componentType = STATIC_TEXT_FIELDS.includes(item.type)
      ? 'TEXT_INPUT'
      : item.type
    switch (componentType) {
      case 'CID_FLAG':
        return <CIDCard isComplete={item.isComplete} title={item.label} />
      case 'HEADER':
        return <Header key={key} title={item.label} />
      case 'REPORTED':
        return <ReportedCards key={key} item={item} section={section.section} />
      case 'TEXT_INPUT':
        return <TextInput key={key} {...item} />
      case 'TABLE':
        return <Table key={key} item={item} hideFlag={hideFlag} />
      case 'EQUIPMENT_STOPS':
        return <EquipmentStops key={key} item={item} />
      case 'STOPS_TOTAL_TABLE':
        return (
          <TotalStopsTable
            key={key}
            item={item}
            positionName={section.positionName}
          />
        )
      case 'PACKAGING_TOTAL_TABLE':
        return <PackagingTotalTable key={key} item={item} section={section} />
      default:
        return <Column key={key}>{'<MISSING COMPONENT>'}</Column>
    }
  }
}

export default SectionContent
