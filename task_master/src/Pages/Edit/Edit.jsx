import "../Create/Create.css";
import { FaEdit } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Components/Context/AppContext';

const Edit = () => {

    const { id } = useParams()
    const [Date, setDate] = useState("")
    const [Title, setTitle] = useState("")
    const [Success, setSuccess] = useState("")
    const { Todos, editTodo } = useAppContext()
    const [Priority, setPriority] = useState("")
    const [Description, setDescription] = useState("")    

    useEffect(() => {

        const getTodoById = () => {
            const foundTodo = Todos.find(Todo => Todo.id === id);
            setDate(foundTodo.Date)
            setTitle(foundTodo.Title)
            setPriority(foundTodo.Priority)
            setDescription(foundTodo.Description)
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
    <div className='Create'>
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
            <h4>{Success}</h4>
            <button type="submit" onSubmit={editTask} >Edit Task</button>
        </form>
    </div>
)
}   

export default Edit