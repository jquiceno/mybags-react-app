import React, { useEffect, useState } from 'react'
import { Header, PersonCard } from '../../Components'
import { Container, Row, Col } from 'react-bootstrap';
import Person from '../../Services/Person'

function Home () {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    Person.getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])
  
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {
            persons.length && persons.map((person, index) => <Col key={index}><PersonCard person={person}/></Col>)
          }
        </Row>
      </Container>
    </>
  );
}

export default Home