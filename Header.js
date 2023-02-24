import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  return (
    <Container fluid>
      <Navbar bg="dark" expand="lg">

        <Navbar.Brand href="#home"><h1 className="text-light"><span><i className="bi bi-watch px-4"></i>Whatches</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home" className="text-warning">Home</Nav.Link>
            <Nav.Link href="#link" className="text-light">Collection</Nav.Link>
            <Nav.Link href="#link" className="text-light">Shop</Nav.Link>

            <NavDropdown title={<span className="text-light">Pages</span>
            } id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="text-light">Conduct-Us</Nav.Link>
            <NavDropdown title={<span className="text-light">Pages</span>
            } id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home" className="text-light"><i className="bi bi-search px-2" ></i></Nav.Link>
            <Nav.Link href="#link" className="text-light"><i className="bi bi-person-add px-2"></i></Nav.Link>
            <Nav.Link href="#link" className="text-light"><i className="bi bi-cart-plus px-2"></i></Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </Container>
  )
}

export default Header