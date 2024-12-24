import React from 'react';
import "../Home/Home.css";
import { Link  } from 'react-router-dom';
import { FaNoteSticky } from "react-icons/fa6";
import { useAppContext } from '../../Components/Context/AppContext';

const Home = () => {

    const { Todos, removeTodo } = useAppContext()

return (
    <div className='Home'>
        <section>
            <h2> <FaNoteSticky size="1.5rem" /> Created Tasks</h2>
            <hr />
        </section>
        <section>
            <ul>
                {
                Todos.map((Todo) => {
                    return (
                        <li className='Todo' key={Todo.id} >
                            <h3>{Todo.Title}</h3>
                            <p>{Todo.Description}</p>
                            <div>
                                <span>{Todo.Priority}  priority</span>
                                <p>Due Date:<input type="datetime-local" name="" value={Todo.Date} id="" readOnly /></p>
                                <figure>
                                    <Link to={`/${Todo.id}`} ><i class="fa-solid fa-pen-to-square" id='Edit' ></i></Link>
                                    <i id='Delete' onClick={() => removeTodo(Todo.id)} class="fa-solid fa-trash"></i>
                                </figure>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    </div>
)
}

export default Home