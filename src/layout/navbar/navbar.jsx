import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthContext } from '../../context/auth-context';
import { Button } from '@material-tailwind/react';
const AppNavbar = () => {
  const authStatus = useAuthContext()
  const [status,SetStatus] = useState(false);
  let customer = JSON.parse(sessionStorage.getItem('customer'))
  
  useEffect(()=>{
    if (customer) {
        SetStatus(true)
    }
  }, [])

  const handleExit = () => {
    sessionStorage.clear();
    window.location.reload()
  }
  return (
    <Navbar bg="" data-bs-theme="light" className='border mb-3 navbar-container'>
        <Container className='font-monospace'>
          <Navbar.Brand href="/home">Biblioteca Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" className='text-dark'>Inicio</Nav.Link>
            {
              status == true?(
                <>
                <Nav.Link href="/reservedBooks" className='text-dark'>Prestamos</Nav.Link>
                <Button variant='gradient' size='sm' onClick={handleExit}>Salir</Button>
                </>
              ):(
                <Nav.Link href="/auth" className='text-dark'>Login</Nav.Link>
              )
            }
          </Nav>
        </Container>
      </Navbar>
  )
}

export default AppNavbar