import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context
}

const AppContextProvider = ({children}) => {

    const TodoState = () => {
        let Todos = localStorage.getItem("Todos");

        if (Todos) {
            return JSON.parse(localStorage.getItem("Todos"))
        } else {
            return [];
        }
    }

    const [Todos, setTodos] = useState(TodoState())

    const addTodo = (Todo) => {
        setTodos([...Todos, Todo])
        console.log([...Todos, Todo])
    }

    const removeTodo = (id) => {
        const OldTodo = [...Todos]
        const NewTodo = OldTodo.filter((Item) => Item.id !== id)
        setTodos(NewTodo)
    }

    const editTodo = (id, EditedTodo) => {
        const EditedTask = Todos.map(Todo => (Todo.id === id ? EditedTodo : Todo));
        setTodos(EditedTask);
        console.log(id)
    };

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(Todos))
    },[Todos]);

    return (
        <AppContext.Provider value={{ Todos, addTodo, removeTodo, editTodo }} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;