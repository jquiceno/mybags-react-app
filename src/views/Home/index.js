import React, { useEffect, useState } from 'react'
import { Header, PersonCard, Footer } from '../../Components'
import { Row } from 'react-bootstrap';
import Person from '../../Services/Person'
import { Cont, Container, Col } from './Styles'

function Home () {
  const [persons, setPersons] = useState([]);

  const handlerChangePerson = async (personId, data = {}) => {
    Person.update(personId, data)
  }

  useEffect(() => {
    Person.getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])
  
  return (
    <Cont>
      <Header />
      <Container fluid>
        <Row>
          {
            persons.length && persons.map((person, index) => <Col md="3" lg="3" key={index}>
              <PersonCard person={person} onChangePerson={handlerChangePerson}/>
            </Col>)
          }
        </Row>
      </Container>
      <Footer />
    </Cont>
  );
}

export default Home