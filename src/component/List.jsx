import React from 'react'
import { Container } from 'react-bootstrap';


function List({ data }) {
    return (
        <>
            {
                data.map((ele) => (
                    <Container className='my-2'>
                        <div className={ele.status ? "row bg-success-subtle" : "row bg-danger-subtle"} key={ele.id}>
                            <div className="col-4">{ele.task}</div>
                            <div className="col-4"><button className="btn btn-sm disabled">{ele.status ? "completed" : "not completed"}</button></div>
                            <div className="col-4"><button className='btn btn-secondary'>🗑️</button></div>
                        </div>
                    </Container>

                ))
            }
        </>
    )
}

export default List;