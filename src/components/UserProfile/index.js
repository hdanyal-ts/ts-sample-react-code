import React from 'react'
import EN_LABELS from '@public/content/english'
import { formatDate } from '@utils/dates'
import { Heading2 } from '../Text'
import { ProfileContainer, ProfileItemContainer, ProfileRow } from './styles'

function UserProfile (props) {
  const { name, supervisor, date, shift, crew, positions } = props
  return (
    <ProfileContainer>
      <ProfileRow>
        <ProfileItem
          id='name-field'
          label={EN_LABELS['app.default.settings.profile.name']}
          value={name}
        />
        <ProfileItem
          id='supervisor-field'
          label={EN_LABELS['app.default.settings.profile.supervisor']}
          value={supervisor}
        />
      </ProfileRow>
      <ProfileRow $col={3}>
        <ProfileItem
          id='date-field'
          label={EN_LABELS['app.default.settings.profile.date']}
          value={formatDate(date)}
        />
        <ProfileItem
          id='shift-field'
          label={EN_LABELS['app.default.settings.profile.shift']}
          value={shift}
        />
        <ProfileItem
          id='crew-field'
          label={EN_LABELS['app.default.settings.profile.crew']}
          value={crew}
        />
      </ProfileRow>
      <ProfileRow $col={1}>
        <ProfileItem
          id='positions-field'
          label={EN_LABELS['app.default.settings.profile.positions']}
          value={positions.join(', ')}
        />
      </ProfileRow>
    </ProfileContainer>
  )
}
function ProfileItem ({ id, label, value }) {
  return (
    <ProfileItemContainer id={id}>
      <Heading2 className='profile-item-label' style={{ fontWeight: 'normal' }}>
        {label}
      </Heading2>
      <Heading2 className='profile-item-value' style={{ fontWeight: 800 }}>
        {value.toUpperCase()}
      </Heading2>
    </ProfileItemContainer>
  )
}

export default UserProfile
