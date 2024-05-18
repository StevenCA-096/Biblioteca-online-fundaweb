import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const ReservedBooks = () => {
  return (
    <>
    <Container style={{ display: 'grid', alignItems: 'center' }} className=''>
      <Row>
      <Col lg={12}>
                    <FloatingLabel
                        label={"Filtrar por categoria"}
                        className='mb-4 shadow'
                    >
                        <Form.Select>
                            <option value="0">Todos</option>
                            <option value="1">Politica</option>
                            <option value="2">Filosofia</option>
                            <option value="3">Ficcion</option>
                            <option value="4">Otros</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
      </Row>
      <Row>
        <Col lg={2}>
      <Card className="py-0000000.2">
      <CardHeader className="pb-0 pt-1 px-2 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Autor</p>
        <small className="text-default-500">Friedrich Engels, Karl Heinrich Marx</small>
        <h4 className="font-bold text-large">Manifiesto comunista</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://m.media-amazon.com/images/I/51kLuUmAjpL._SY466_.jpg"
          width={220}
        />
      </CardBody>
    </Card>
    </Col>
      </Row>
    </Container>
    </>
  )
}

export default ReservedBooks