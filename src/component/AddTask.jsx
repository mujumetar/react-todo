import { Container, Row, Col, Button } from 'react-bootstrap';

const AddTask = ({ handleTask, setTask, task, count, setCount, handleTodo, todo }) => {



    return (
        <>
            <Container className='my-3'>
                <Row >
                    <Col lg={8} className="mx-auto  rounded-4">
                        <div className='d-flex'>
                            <input className='form-control border' name="" placeholder="Enter Task" value={task} onChange={(e) => { setTask(e.target.value); setCount(1) }} />
                            <Button className='rounded-circle btn-sm my-auto btn-light mx-2' onClick={handleTask} >➕</Button>
                        </div>

                        <div className="row px-4">
                            {[...Array(count)].map((ele, index) => (
                                <div className="col-12 px-3 d-flex" >
                                    <Button className='btn btn-light btn-sm p-0'  disabled>📝</Button>
                                    <input className='form-control form-control-sm border-0 border-top' value={todo[index]?.to} onChange={(e) => { handleTodo(e.target.value, index) }} placeholder={index + " todo no"} />
                                </div>
                            ))}

                        </div>
                    </Col>
                    <Col lg={1} className="mx-auto d-flex">

                    </Col>
                    <Col lg={2}></Col>

                </Row>
            </Container>
        </>
    )
}

export default AddTask