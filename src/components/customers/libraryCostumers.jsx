import { DataGrid } from '@mui/x-data-grid';
import { Button, Spinner } from 'react-bootstrap';
import ErrorIcon from '@mui/icons-material/Error';
import { useQuery, useMutation, QueryClient } from 'react-query';
import { getCostumers } from '../../services/costumerService';
import addLibraryCostumers from './actions/addLibraryCostumers'
import { Container, Row, Col } from 'react-bootstrap';

const ListCostumer = () => {
    const { data, isLoading, isError } = useQuery('costumers', getCostumers);


    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (isError) {
        return <ErrorIcon fontSize='large' />
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'NOMBRE', width: 160 },
        { field: 'surname1', headerName: 'PRIMER APELLIDO', width: 200 },
        { field: 'surname2', headerName: 'SEGUNDO APELLIDO', width: 190 },
        { field: 'mobileNumber', headerName: 'NUMERO MOVIL', width: 160 },
        { email: 'reviews', headerName: 'EMAIL', width: 160 },
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
                    <addLibraryCostumers />
                </Col>
            </Row>
            <Row>
                {DataTable()}
            </Row>
        </Container>
    )

}


export default ListCostumer