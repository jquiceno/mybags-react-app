import React from 'react'
import { Card } from './Styles'

const PersonCard = ({ person }) => {
  return (
    <Card>
      { person && <ul>
        <li>Name: {person.name || ''}</li>
        <li>Last Name: {person.lastName || ''}</li>
        <li>Email: {person.email || ''}</li>
        <li>Country: {person.country || ''}</li>
        <li>City: {person.city || '' }</li>
        <li>Bags: {person.bags || ''}</li>
        </ul>
      }
    </Card>
  )
}

export default PersonCard