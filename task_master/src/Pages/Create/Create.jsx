import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import "../Create/Create.css";

const Create = () => {
return (
    <div className='Create' >
        <section>
            <h2> <AiFillEdit size="1.5rem" /> Create Tasks</h2>
            <hr />
        </section>
        <form action="" method="get">
            <p>
                <label htmlFor="Title">Title</label>
                <input type="text" name="Title" id="Title" placeholder='Enter Title...' />
            </p>
            <p>
                <label htmlFor="Description">Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description...' ></textarea>
            </p>
            <p>
                <label htmlFor="Date">Due Date</label>
                <input type="datetime-local" name="Date" id="Date" />
            </p>
            <p>
                <label htmlFor="Priority">Priority</label>
                <select name="Priority" id="Priority">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </p>
            <button type="submit">Add New Task</button>
        </form>
    </div>
)
}   

export default Create