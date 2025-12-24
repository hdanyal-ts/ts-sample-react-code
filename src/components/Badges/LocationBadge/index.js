import React from 'react'
import EN_LABELS from '@public/content/english'
import { LocationCity, LocationContainer, LocationText } from './styles'

function LocationBadge ({ location }) {
  return (
    <LocationContainer>
      <LocationText>
        {EN_LABELS['app.default.sidebar.location']}
      </LocationText>
      <LocationCity>{location}</LocationCity>
    </LocationContainer>
  )
}

export default LocationBadge
