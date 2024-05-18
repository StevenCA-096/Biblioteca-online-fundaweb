import React from 'react'
import AppNavbar from './navbar/navbar'
import { Container, Row } from 'react-bootstrap'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <Container fluid className='layoutContainer'>
      <Row>
        <AppNavbar />
      </Row>

      <Row>
        <Outlet />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  )
}

export default layout