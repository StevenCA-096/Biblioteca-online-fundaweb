import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Spinner } from '@material-tailwind/react';
import { useQuery } from 'react-query';
import { getBooks } from '../../services/bookService';
import { BookReservation } from './book-reservetations/book-reservations';

const HomePage = () => {

  const { data: booksApi, isLoading: booksLoading, isError: booksError } = useQuery('books', getBooks);

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const searchQuery = 'the lord of the rings';
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;
        const response = await axios.get(url)
        setBooks(response.data.docs.slice(0, 10));
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data from Open Library:', error);
      }
    };

    fetchBooks();
  }, []);


  return (
    <Container style={{ display: 'grid', alignItems: 'center' }}>
      <Row>
        <Col>
          <h1 className='font-monospace text-center text-decoration-underline my-2'>Nuestros libros</h1>
        </Col>
      </Row>
      {
        isLoading ? (<Spinner />) : (null)
      }
      <Row>
        {
          booksApi ? (
            booksApi.map((book) =>
              <Col lg={4} key={book.bookName} className='py-2 px-2'>
                <Card className="py-2 px-2 shadow">
                  <Card.Img className='img-fluid' src={book.imgUrl} style={{ width: 'inherit', height: '350px' }} />

                  <Card.Body className="overflow-visible py-0">
                    <Card.Title className="pb-0 pt-1 px-2 flex-col items-start text-center">
                      <p className="text-tiny uppercase font-bold">{book.authorName}</p>
                      <small className="text-default-500">{book.category}</small>
                      <h4 className="font-bold text-large">{book.bookName}</h4>
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer className='bg-transparent'>
                    <BookReservation props={book.id}/>
                  </Card.Footer>
                </Card>
              </Col>
            )
          ) : (null)
        }
        
      </Row>
    </Container>
  )
}

export default HomePage