import React, { useState, useEffect } from 'react'
import AddTask from './AddTask'

import { v4 as uuidv4 } from 'uuid';
import List from './List';


function Task() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([])
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);
    const [upId, setUpId] = useState("")


    const getLocal = () => {
        let list = JSON.parse(localStorage.getItem("taskList"))
        setTaskList(list)
    }


    useEffect(() => {
        getLocal()
    }, [])

    const setLocal = (list) => {
        localStorage.setItem("taskList", JSON.stringify(list))
        console.log(list)
    }




    function statusTodo(ele_id, el_id) {

        let newTAsk = taskList.find(ele => ele.id == ele_id)

        newTAsk.todos = newTAsk.todos.map((el) => el.id == el_id ? { ...el, status: !el.status } : el)

        let newTaskList = taskList.map((ele) => ele.id == ele_id ? ele = newTAsk : ele)
        setTaskList(newTaskList)
        setLocal(taskList)
    }

    // const  = new Date();
    const timestamp = new Date();


    function handleTodo(ele, index) {

        let newTodo = [...todo];

        newTodo[index] = {
            to: ele,
            status: false,
            id: uuidv4()

        }

        setTodo(newTodo)

        console.log(newTodo)

        setCount(index + 2)
    }



    function handleTask() {

        let obj = {
            task,
            status: false,
            todos: todo,
            time: timestamp,
            id: uuidv4()
        }


        if (upId) {
            console.log(upId)
            let newt = taskList.map((ele) => ele.id == upId ? ele = obj : ele)
            setLocal(newt)
            console.log(newt)

        }
        else {
            taskList.push(obj);
            setLocal(taskList)
        }




        setTask("")

        setCount(0)
        setTodo([])

    }



    function delTask(id) {
        const update = taskList.filter((ele) => ele.id != id)

        setTaskList(update)
        setLocal(update)

        getLocal()
    }






    function editTask(id) {

        const update = taskList.map(ele => ele.id == id ? { ...ele, status: !ele.status } : ele);

        setTaskList(update)
        setLocal(update)
        getLocal()

    }


    function updateTask(element) {



        setCount(element.todos.length)
        setTask(element.task);

        setUpId(element.id)
        setTodo(element.todos)


    }


    // console.log(taskList)

    return (
        <>
            <AddTask handleTask={handleTask} setTask={setTask} task={task} count={count} setCount={setCount} handleTodo={handleTodo} todo={todo} timestamp={timestamp} />
            <List taskList={taskList} delTask={delTask} editTask={editTask} updateTask={updateTask} statusTodo={statusTodo} upId={upId} setTask={setTask} timestamp={timestamp} handleTodo={handleTodo} handleTask={handleTask} />
        </>
    )
}

export default Task