import React from 'react';
import "../Header/Header.css";
import { MdEditNote } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";

const Header = () => {
return (
    <div className='Container'>
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
                <a href='/'>
                    <p><RiHome2Fill className='homeIcon' size="1.8rem" /></p>
                </a>
            </section>
            <section>
                <a href='/Create' className='createLink'>
                    <button> <IoMdAddCircle size="1.5rem" /> Add New Task</button>
                </a>
            </section>
        </div>
    </div>
)
}

export default Header