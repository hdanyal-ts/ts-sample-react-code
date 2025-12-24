import React from 'react'
import { ContentContainer, ContentHeaderWrapper } from './styles'
import SectionTable from './SectionTable'
import SectionResponse from './SectionResponse'
import SectionCards from './SectionCards'
import SectionCell from './SectionCell'

function SectionContent (props) {
  const { bgColor, color, headers, metrics, section, isContentVisible } = props
  const containsHeaders = headers?.length > 0
  const params = { bgColor, color, headers, section, isContentVisible }
  const renderContent = composeSectionMetric(params)
  return (
    <ContentContainer
      id='kpi-section-content'
      rows={containsHeaders ? 'auto 1fr' : '1fr'}
    >
      {containsHeaders && (
        <ContentHeader
          bgColor={bgColor}
          color={color}
          headers={headers}
          section={section}
        />
      )}
      {metrics.map(renderContent)}
    </ContentContainer>
  )
}
function ContentHeader ({ bgColor, color, headers, section }) {
  return (
    <ContentHeaderWrapper>
      {headers.map((item, index) => (
        <SectionCell
          key={`${section}-${index}`}
          color={color}
          bgColor={bgColor}
          isBold
          label={item}
        />
      ))}
    </ContentHeaderWrapper>
  )
}
function composeSectionMetric (props) {
  return (metric, index) => {
    const { bgColor, color, headers, section, isContentVisible } = props
    const key = `${metric.type}-${index}`
    switch (metric.type) {
      case 'RESPONSE':
        return (
          <SectionResponse
            key={key}
            bgColor={bgColor}
            col={headers?.length}
            color={color}
            metric={metric}
            isContentVisible={isContentVisible}
          />
        )
      case 'REPORT':
        return (
          <SectionCards
            key={key}
            bgColor={bgColor}
            metric={metric}
            section={section}
            isContentVisible={isContentVisible}
          />
        )
      case 'TABLE':
        return (
          <SectionTable
            key={key}
            bgColor={bgColor}
            metric={metric}
            isContentVisible={isContentVisible}
          />
        )
      default:
        return null
    }
  }
}

export default SectionContent
