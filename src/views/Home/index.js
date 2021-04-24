import React, { useEffect, useState } from 'react'
import { Header, PersonCard, Footer } from '../../Components'
import { Row, Col } from 'react-bootstrap';
import Person from '../../Services/Person'
import { Cont, Container } from './Styles'

function Home () {
  const [persons, setPersons] = useState([]);

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
            persons.length && persons.map((person, index) => <Col lg="4" key={index}>
              <PersonCard person={person}/>
            </Col>)
          }
        </Row>
      </Container>
      <Footer />
    </Cont>
  );
}

export default Home