import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const ReservedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const searchQuery = 'the lord of the rings';
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;
        const response = await axios.get(url);
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching data from Open Library:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Container style={{ display: 'grid', alignItems: 'center' }}>
      <Row>
        {books.map((book, index) => {
          const title = book.title;
          const author = book.author_name ? book.author_name.join(', ') : 'Unknown author';
          const coverId = book.cover_i;
          const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : 'No cover available';

          return (
            <Col lg={2} key={index}>
              <Card className="py-2">
                <CardHeader className="pb-0 pt-1 px-2 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Autor</p>
                  <small className="text-default-500">{author}</small>
                  <h4 className="font-bold text-large">{title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-0">
                  <Image
                    alt={title}
                    className="object-cover rounded-xl"
                    src={coverUrl}
                    width={220}
                  />
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ReservedBooks;