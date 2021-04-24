import { Nav } from 'react-bootstrap';
import { Navbar } from './Styles'

const Footer = () =><Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/new">New</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Footer