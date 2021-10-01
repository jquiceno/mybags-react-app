import React, { useEffect, useState } from 'react'
import { Header, PersonCard, Footer } from '../../Components'
import { Row, Modal, Button } from 'react-bootstrap';
import User from '../../Services/User'
import { Container, Col, NewUserButton } from './Styles'

function Home ({ showNewUser = false }) {
  const [persons, setPersons] = useState([]);
  const [show, setShow] = useState(showNewUser);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerChangePerson = async (personId, data = {}) => {
    User.update(personId, data)
  }

  useEffect(() => {
    User.getAll()
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
            persons.length && persons.map((person, index) => <Col md="3" lg="3" key={index}>
              <PersonCard person={person} onChangePerson={handlerChangePerson}/>
            </Col>)
          }
        </Row>
      </Container>
      <Footer />
      <NewUserButton onClick={handleShow}> + </NewUserButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home