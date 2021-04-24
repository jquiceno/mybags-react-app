import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Header = () => <Navbar bg="light" expand="lg">
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