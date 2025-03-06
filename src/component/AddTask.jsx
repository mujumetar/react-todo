
import { Container, Row, Col, Table } from 'react-bootstrap';


export const AddTask = ({ HandleTask, setTask, task }) => {


    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} className='my-5 d-flex mx-auto'>
                        <input type='text' className='form-control mx-2' value={task} onChange={(e) => setTask(e.target.value)} />
                        <button className='btn btn-warning' onClick={HandleTask}>➕</button>
                    </Col>
                </Row>
            </Container>

          
        </>
    )
}


