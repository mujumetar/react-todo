import React from 'react'
import { Container } from 'react-bootstrap';


function List({ data , setTask, setData}) {




    function updateTask(id) {
        const update = data.map((ele) => ele.id === id ? { ...ele, status: !ele.status } : ele)
        setData(update)
    }

    function delTask(id) {
        const deleData = data.filter((ele) => ele.id != id)
        setData(deleData)
        
    }


    return (
        <>
            {
                data.map((ele) => (
                    <Container className='my-2'>
                        <div className={ele.status ? "row bg-success-subtle" : "row bg-danger-subtle"} key={ele.id}>
                            <div className="col-4">{ele.task}</div>
                            <div className="col-4"><button className="btn btn-sm"  onClick={() => updateTask(ele.id)}> {ele.status ? "completed ✔️" : "not completed 🔴"}</button></div>
                            <div className="col-4"><button className='btn btn-secondary'  onClick={() => delTask(ele.id)}>🗑️</button></div>
                        </div>
                    </Container>

                ))
            }
        </>
    )
}

export default List;