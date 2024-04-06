import React from 'react';
import { MdEditNote } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom"; 
import "../Header/Header.css";

const Header = () => {
return (
    <div className='Header'>
        <section>
            <figure>
                <MdEditNote size="2rem" />
                <figcaption>
                    <h1>Task Master</h1>
                </figcaption>
            </figure>
        </section>
        <section>
            <a href='/Create' className='createLink'>
                <button> <IoMdAddCircle size="1.5rem" /> Add New Task</button>
            </a>
        </section>
    </div>
)
}

export default Header