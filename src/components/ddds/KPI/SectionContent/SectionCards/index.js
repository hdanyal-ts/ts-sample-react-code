import React, { useState } from 'react'
import { Modal } from '../../Modal'
import {
  CardAction,
  CardContainer,
  CardItem,
  CardLabel,
  CardListContainer,
  CardsContainer,
  CardsWrapper,
  EmptyCell,
  EmptyLabel,
  EmptyLabelBox
} from './styles'
import { colors } from '@design/colors'

function SectionCards (props) {
  const { bgColor, metric, section, isContentVisible } = props
  const showCards = metric.content.length > 0 && isContentVisible
  const cards = showCards
    ? <SectionCardsList bgColor={bgColor} metric={metric} section={section} />
    : <EmptyCards bgColor={bgColor} />

  return (
    <CardsWrapper>
      <CardLabel $color={colors.black} $bgcolor={`${bgColor}20`} $bold>
        {metric.title}
      </CardLabel>
      {cards}
    </CardsWrapper>
  )
}
function SectionCardsList (props) {
  const { bgColor, metric, section } = props
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(prev => !prev)
  return (
    <CardListContainer onClick={toggleModal}>
      <CardsContainer>
        {metric.content.map((content, index) => (
          <SectionCard
            key={`${metric.title}-${index}`}
            bgColor={`${bgColor}20`}
            content={content}
          />
        ))}
      </CardsContainer>
      <ActionItem />
      <Modal
        section={section}
        isOpen={showModal}
        reports={metric.content}
        onClose={toggleModal}
      />
    </CardListContainer>
  )
}
function SectionCard ({ bgColor, content }) {
  return (
    <CardContainer $color={colors.black} $bgcolor={bgColor}>
      {content?.description && (
        <CardItem>{content.description.slice(0, 75)}...</CardItem>
      )}
    </CardContainer>
  )
}
function ActionItem () {
  const buttonStyle = {
    backgroundColor: colors.black,
    color: colors.brandYellow
  }
  return <CardAction style={buttonStyle}>...</CardAction>
}
function EmptyCards (props) {
  return (
    <EmptyCell backgroundColor={`${props.bgColor}20`} color={colors.black}>
      <EmptyLabelBox>
        <EmptyLabel>0 Reported</EmptyLabel>
      </EmptyLabelBox>
    </EmptyCell>
  )
}

export default SectionCards
