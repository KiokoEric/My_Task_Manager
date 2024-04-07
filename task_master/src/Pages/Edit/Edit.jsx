import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import "../Create/Create.css";
import { useAppContext } from '../../Components/Context/AppContext';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const { Todos, editTodo } = useAppContext()
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Date, setDate] = useState("")
    const [Priority, setPriority] = useState("")
    const [Success, setSuccess] = useState("")
    const { id } = useParams()


    useEffect(() => {

        const getTodoById = () => {
            const foundTodo = Todos.find(Todo => Todo.id === id);
            setTitle(foundTodo.Title)
            setDescription(foundTodo.Description)
            setDate(foundTodo.Date)
            setPriority(foundTodo.Priority)
        };

        getTodoById()
    },[])

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handlePriority = (e) => {
        setPriority(e.target.value)
    }

    const editTask = (e) => {
        e.preventDefault()
        editTodo(id, { id, Title: Title,Description: Description,Date: Date,Priority: Priority,Completed: false})
        setSuccess("Task has been successfully edited.")
    }

return (
    <div className='Create' >
        <section>
            <h2> <FaEdit size="1.5rem" /> Edit Task</h2>
            <hr />
        </section>
        <form onSubmit={editTask} action="" method="get">
            <p>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title" id="Title" placeholder='Enter Title...' value={Title} onChange={handleTitle} />
            </p>
            <p>
                <label htmlFor="Description">Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description...' value={Description} onChange={handleDescription} ></textarea>
            </p>
            <p>
                <label htmlFor="Date">Due Date</label>
                <input type="datetime-local" name="Date" id="Date" value={Date} onChange={handleDate} />
            </p>
            <p>
                <label htmlFor="Priority">Priority</label>
                <select name="Priority" id="Priority" value={Priority} onChange={handlePriority} >
                    <option value="">Select an option</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </p>
            <p className='Green' >{Success}</p>
            <button type="submit" onSubmit={editTask} >Edit Task</button>
        </form>
    </div>
)
}   

export default Edit