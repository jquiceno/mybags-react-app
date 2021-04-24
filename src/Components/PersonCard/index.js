import React, { useState } from 'react'
import { Card, CardHeader, CardPersonImage, CardPersonInfo, CardFooter, BagButton } from './Styles'
import { Row, Col } from 'react-bootstrap';

const PersonCard = ({ person, onChangePerson }) => {
  const [personBags, setpersonBags] = useState(person.bags || 0)

  const handlerButtonBags = (action = 'add') => {
    const newBags = (action === 'add') ? personBags + 1 : personBags - 1
    setpersonBags(newBags)

    onChangePerson(person._id, {
      bags: newBags
    })
  }

  return (
    <Card>
      <CardHeader>
        <span className="person-location">{`${person.country} | ${person.city}`}</span>
      </CardHeader>
      <CardPersonInfo>
        <figure>
          <CardPersonImage email={person.email || 'johndue@gmail.com'} size={100}/>
        </figure>
        <h2 className="person-name" >{`${person.name} ${person.lastName}`}</h2>
        <h3 className="person-email">{person.email || '@'}</h3>
      </CardPersonInfo>
      <CardFooter className="container-fluid">
        <Row>
          <Col>
            <BagButton disabled={personBags < 1} onClick={() => handlerButtonBags('remove')}>-</BagButton>
          </Col>
          <Col>
            <span className="title">Bags</span>
            <span className="count" >{personBags}</span>
          </Col>
          <Col>
            <BagButton disabled={personBags > 4} onClick={() => handlerButtonBags('add')}>+</BagButton>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  )
}

export default PersonCard