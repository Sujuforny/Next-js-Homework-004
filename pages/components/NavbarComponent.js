import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img className='w-25'
            src='/1.png'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movie">Movie</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <img className='w-25 float-end'
            src='/3.png'></img>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;