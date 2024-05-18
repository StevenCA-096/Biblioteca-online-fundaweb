import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const AppNavbar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">Biblioteca Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/reservedbooks">Available Books</Nav.Link>
            <Nav.Link href="#pricing">Prestamos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default AppNavbar