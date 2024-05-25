import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Spinner } from '@material-tailwind/react';

const ReservedBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const searchQuery = 'the lord of the rings';
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;
        const response = await axios.get(url)
        setBooks(response.data.docs.slice(0, 2));
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
          <h1 className='font-monospace text-center text-decoration-underline my-2'>Mis prestamos</h1>
        </Col>
      </Row>

      {
        isLoading ? (<Spinner className='text-center'/>) : (null)
      }

      <Row>
        {books.map((book, index) => {
          const title = book.title;
          const author = book.author_name ? book.author_name.join(', ') : 'Unknown author';
          const coverId = book.cover_i;
          const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : 'No cover available';

          return (
            <Col lg={4} key={index} className='py-2 px-3'>
              <Card className="py-3 px-2 shadow text-center">
                <Card.Img className='img-fluid' src={coverUrl} style={{ width: 'inherit', height: '350px' }} />
                <Card.Title className="pb-0 pt-1 px-2 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Autor</p>
                  <small className="text-default-500">{author}</small>
                  <h4 className="font-bold text-large">{title}</h4>
                </Card.Title>
                <Card.Body className="overflow-visible py-0">
                  <hr />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ReservedBooks;