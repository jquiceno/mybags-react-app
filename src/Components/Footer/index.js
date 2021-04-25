import { Nav } from 'react-bootstrap';
import { Navbar } from './Styles'

const Footer = () =><Navbar fixed="bottom" bg="light">
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/new">New</Nav.Link>
    </Nav>
</Navbar>

export default Footer