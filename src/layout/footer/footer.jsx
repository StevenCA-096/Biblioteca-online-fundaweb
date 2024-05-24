import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const footer = () => {
  return (
    <Container fluid className='bg-white border text-center py-3 footer-container' >
      <Row>
        <Col><h2 className='fw-bold font-monospace'>Biblioteca Online</h2></Col>
      </Row>
      <Row>
        <Col>
          <h4>Contacto</h4>
          <h5>Telefono: 12344321</h5>
          <h5>Email: biblio@online.com</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default footer