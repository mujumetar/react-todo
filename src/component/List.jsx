import React from 'react'
import { useState } from 'react';

import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

function List({taskList, delTask, editTask, updateTask, statusTodo , upId, setTask, handleTodo}) {

    console.log(taskList)
  return (
    <>
        <Container className="my-3">
            <Row className='g-3' >
                {
                    taskList.map((ele) => (
                        <Col lg={4} key={ele.id} >
                            <div className={ ele.status ? "bg-light border rounded-3 p-3 position-relative" : "bg-success-subtle border rounded-3 p-3 position-relative"}  >
                                {/* {upId==ele.id ?
                                <input type='' value={ele.task} onChange={(e) =>{setTask(e.target.value)}} /> :
                            } */}
                            <h4>{ele.task}</h4>
                                <Dropdown className="position-absolute"  style={{right:"10px", top:"10px"}} >
                                    <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic" className='togle'>
                                    ⋮
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <Button onClick={() => editTask(ele.id)} variant="warning" className='btn btn-sm'>✒️ Edit</Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <Button onClick={() => updateTask(ele)} variant="warning" className='btn btn-sm'>📝 Update</Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <Button onClick={() => delTask(ele.id)} variant="danger" className='btn btn-sm'>🗑️ Delete</Button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                {/* <button className='btn btn-outline-light btn-sm rounded-circle position-absolute' style={{right:"10px", top:"10px"}}>⋮</button> */}
                                <ul className="list-group">
                                         {
                                    ele.todos.map((el) => (
                                        <li className="list-group-item" key={el.id}>
                                        <input className="form-check-input me-1" onClick={() => statusTodo( ele.id, el.id)}  checked={el.status}  type="checkbox" value={el.status ? "checked" : ""} id={"firstCheckbox"+el.id}/>
                                        {/* {
                                            upId==ele.id ? 
                                            <input type='text' value={el.to} onChange={(e) => handleTodo(e.target.value, index)} />
                                            :
                                        } */}
                                        <label className={el.status ? 'form-check-label ms-3 text-decoration-line-through text-secondary' : 'form-check-label ms-3'} for={"firstCheckbox"+el.id}>{el.to}</label>
                                    </li>
                                    ))
                                         }
                                </ul>
                              
                               
                                
                            </div>
                        </Col>
                    ))
                }
               
            </Row>
        </Container>
    </>
  )
}


export default List