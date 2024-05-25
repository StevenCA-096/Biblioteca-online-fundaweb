import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const AppNavbar = () => {
  return (
    <Navbar bg="" data-bs-theme="light" className='border mb-3 navbar-container'>
        <Container className='font-monospace'>
          <Navbar.Brand href="/home">Biblioteca Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" className='text-dark'>Inicio</Nav.Link>
            <Nav.Link href="/reservedBooks" className='text-dark'>Prestamos</Nav.Link>
            <Nav.Link href="/auth" className='text-dark'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default AppNavbar