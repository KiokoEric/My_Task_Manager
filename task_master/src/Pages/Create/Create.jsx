import "../Create/Create.css";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { useAppContext } from '../../Components/Context/AppContext';

const Create = () => {

    const { addTodo } = useAppContext()
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Date, setDate] = useState("")
    const [Priority, setPriority] = useState("")
    const [Success, setSuccess] = useState("")

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

    const AddTask = (e) => {
        e.preventDefault()
            setSuccess("Task has been successfully created.")
            addTodo({id: uuidv4(), Title: Title,Description: Description,Date: Date,Priority: Priority,Completed: false})
    }

return (
    <div className='Create'>
        <section>
            <h2> <AiFillEdit size="1.5rem" /> Create Tasks</h2>
            <hr />
        </section>
        <form onSubmit={AddTask} action="" method="get">
            <p>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title" id="Title" placeholder='Enter Title...' value={Title} onChange={handleTitle} required />
            </p>
            <p>
                <label htmlFor="Description">Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description...' value={Description} onChange={handleDescription} required ></textarea>
            </p>
            <p>
                <label htmlFor="Date">Due Date</label>
                <input type="datetime-local" name="Date" id="Date" value={Date} onChange={handleDate} required />
            </p>
            <p>
                <label htmlFor="Priority">Priority</label>
                <select name="Priority" id="Priority" value={Priority} onChange={handlePriority} required >
                    <option value="">Select an option</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </p>
            <p className='Green'>{Success}</p>
            <button type="submit" onSubmit={AddTask} >Add New Task</button>
        </form>
    </div>
)
}   

export default Create