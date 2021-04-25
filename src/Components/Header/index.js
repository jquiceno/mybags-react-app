import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from './Styles.js'
import { Link } from 'react-router-dom'

const Header = () => <Navbar variant="dark" expand="lg">
  <Navbar.Brand href="/">Persons Bags</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/" >Home</Link></Nav.Link>
      <Nav.Link><Link to="/new" >New</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Header