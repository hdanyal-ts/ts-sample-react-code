import React from 'react'
import { KPIContainer } from './styles'
import { composeKPIProps } from '@utils/dataUtils'
import SectionReport from './SectionReport'

function KPIReport ({ kpis, isContentVisible }) {
  return (
    <KPIContainer id='kpi-board'>
      {kpis.map((item, index) => {
        const sectionProps = composeKPIProps(item)
        return (
          <SectionReport
            key={index}
            isContentVisible={isContentVisible}
            bgColor={sectionProps.bgColor}
            label={sectionProps.label}
            metrics={item.metrics}
            section={item.section}
            headers={item.headers}
          />
        )
      })}
    </KPIContainer>
  )
}

export default KPIReport
