import React from 'react'
import { colors } from '@design/colors'
import { formatField } from '@utils/format'
import SectionCell from '../SectionCell'
import { ResponseWrapper } from './styles'

function SectionResponse (props) {
  const { col, bgColor, isContentVisible, metric } = props
  return (
    <ResponseWrapper col={col}>
      {metric.content.map((item, index) => {
        const value = formatField(item.value)
        const comments = formatField(item.comments)
        return (
          <ResponseCell
            key={index}
            col={col}
            value={value}
            comments={comments}
            metric={metric}
            bgColor={bgColor}
            item={item}
            isContentVisible={isContentVisible}
          />
        )
      })}
    </ResponseWrapper>
  )
}
function ResponseCell (props) {
  const { col, value, comments, metric, bgColor, item, isContentVisible } =
    props
  return (
    <>
      <SectionCell
        key={`${metric.type}-1`}
        color={colors.black}
        bgColor={`${bgColor}20`}
        label={item.label}
        isBold
      />
      <SectionCell
        key={`${metric.type}-2`}
        color={colors.black}
        bgColor={`${bgColor}20`}
        label={isContentVisible ? value : ''}
        badge={item?.badge}
      />
      {col === 3 && (
        <SectionCell
          key={`${metric.type}-3`}
          color={colors.black}
          bgColor={`${bgColor}20`}
          label={isContentVisible ? comments : ''}
        />
      )}
    </>
  )
}

export default SectionResponse
