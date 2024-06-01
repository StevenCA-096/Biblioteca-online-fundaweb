import { DataGrid } from '@mui/x-data-grid';
import { Button, Spinner } from 'react-bootstrap';
import ErrorIcon from '@mui/icons-material/Error';
import { useQuery, useMutation, QueryClient } from 'react-query';
import { getBooks } from '../../services/bookService';
import addLibraryBooks from './actions/addLibraryBooks'
import { Container, Row, Col } from 'react-bootstrap';

const ListBooks = () => {
    const { data, isLoading, isError } = useQuery('books', getBooks);


    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (isError) {
        return <ErrorIcon fontSize='large' />
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'bookName', headerName: 'NOMBRE DEL LIBRO', width: 160 },
        { field: 'synopsis', headerName: 'SINOPSIS', width: 200 },
        { field: 'authorName', headerName: 'NOMBRE DEL AUTOR', width: 190 },
        { field: 'publicationYear', headerName: 'AÑO DE PUBLICACION', width: 160 },
        { field: 'reviews', headerName: 'REVIEWS', width: 160 },
        { field: 'category', headerName: 'CATEGORIA', width: 160 },
        { field: 'isbn', headerName: 'ISBN', width: 160 },
        {
            field: 'ACTIONS',
            headerName: 'ACCIONES',
            width: 160
        },

    ];

    let rows = []

    if (data) {
        console.log(data)
        rows = data
    }

    function DataTable() {
        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}


                />
            </div>
        );
    }

    return (
        <Container className='border shadow mt-5'>
            <Row className='mb-4'>
                <Col>
                    <h1>Lista de servicios</h1>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col lg={2}>
                    <addLibraryBooks />
                </Col>
            </Row>
            <Row>
                {DataTable()}
            </Row>
        </Container>
    )

}


export default ListBooks