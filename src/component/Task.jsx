import React from 'react'
import { useState } from 'react'
import { AddTask } from './AddTask'
import { v4 as uuidv4 } from 'uuid';
import List from './list';


function Task() {
    const [task, setTask] = useState("")
    const [data, setData ] = useState([])


    function HandleTask() {
        let obj = {
            task,
            status:"false",
            id: uuidv4()
        }

        
        setData([...data,obj])
    }

    // console.log(data)


    return (
        <>
            <AddTask HandleTask={HandleTask} task={task} setTask={setTask} data={data}/>
            <List data={data} setTask={setTask} setData={setData}/>
        </>
    )
}

export default Task