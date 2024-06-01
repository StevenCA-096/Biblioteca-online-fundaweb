import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Spinner,Button } from '@material-tailwind/react';
import { useQuery } from 'react-query';
import { getCustomerLoans } from '../../services/loanService';

const ReservedBooks = () => {
  let customer = JSON.parse(sessionStorage.getItem('customer'))

  if (customer == null) {
    window.location = '/home'
  }
  const { data: myLoans, isLoading: myBooksLoading, isError: myBooksError } = useQuery('myloans', () => getCustomerLoans(customer.id))

if (myLoans) {
  console.log(myLoans)
}
  return (
    <Container style={{ display: 'grid', alignItems: 'center' }}>

      <Row>
        <Col>
          <h1 className='font-monospace text-center text-decoration-underline my-2'>Mis prestamos</h1>
        </Col>
      </Row>

      <Row>
        {
          myLoans ? (
            
              myLoans.length == 0?(<span className='text-center display-6' >No se han reservado libros</span>):(
                myLoans.map((loan) =>
                  <Col lg={4} key={loan.books.bookName} className='py-2 px-2'>
                    <Card className="py-2 px-2 shadow">
                      <Card.Header style={{background:'none'}}>
                        <span style={{color:'black'}}>Fecha de inicio: {new Date(loan.startDate).toLocaleString()}</span><br />
                        <span style={{color:'black'}}>Fecha de devolucion: {new Date(loan.endDate).toLocaleString()}</span><br />
                      </Card.Header>
                      <Card.Img className='img-fluid' src={loan.books.imgUrl} style={{ width: 'inherit', height: '350px' }} />
                      <Card.Body className="overflow-visible py-0">
                        <Card.Title className="pb-0 pt-1 px-2 flex-col items-start text-center">
                          <p className="text-tiny uppercase font-bold">{loan.books.authorName}</p>
                          <small className="text-default-500">{loan.books.category}</small>
                          <h4 className="font-bold text-large">{loan.books.bookName}</h4>
                        </Card.Title>
                      </Card.Body>
                      <Card.Footer className='bg-transparent text-center'>
                        <Button variant='gradient'>Modificar periodo</Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              )
          ) : 
          (<Spinner className='text-center' />)
        }
      </Row>

      
    </Container>
  );
};

export default ReservedBooks;