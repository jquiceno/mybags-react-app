import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from './Styles.js'

const Header = () => <Navbar variant="dark" expand="lg">
  <Navbar.Brand href="/">Persons Bags</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/new">New</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Header