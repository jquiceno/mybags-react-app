import React from 'react'

const PersonCard = ({ person }) => {
  return (
    <div>
      { person && <ul>
        <li>Name: {person.name || ''}</li>
        <li>Last Name: {person.lastName || ''}</li>
        <li>Email: {person.email || ''}</li>
        <li>Country: {person.country || ''}</li>
        <li>City: {person.city || '' }</li>
        <li>Bags: {person.bags || ''}</li>
        </ul>
      }
    </div>
  )
}

export default PersonCard