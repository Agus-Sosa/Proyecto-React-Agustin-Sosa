import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import Cartwidget from './Cartwidget/Cartwidget';


const Header = () => {
    return (
      <Navbar bg="light" expand="lg" className='header' >
      <Container>
        <Navbar.Brand href="#home" className='nav1'>City Phone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav1'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav1'>Contacto</Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown" className='nav1'>
              <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Samsung
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Xiaomi</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Cartwidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;