import React from 'react'
import { useState,useEffect } from 'react'
import { AddTask } from './AddTask'
import { v4 as uuidv4 } from 'uuid';
import List from './list';

function Task() {
    const [task, setTask] = useState("")
    const [data, setData ] = useState([])


    
    const getLocal = () =>{
        let list = JSON.parse(localStorage.getItem("data"))
        setTask(list)
    }
 

    useEffect(() => {
        getLocal()
    },[])

    const setLocal = (list) =>{
        localStorage.setItem("data", JSON.stringify(list))
        console.log(list)
    }


    function HandleTask() {
        let obj = {
            task,
            status:"false",
            id: uuidv4()
        }

        
        setData([...data,obj])
        setLocal(setData)
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