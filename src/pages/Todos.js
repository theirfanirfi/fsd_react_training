import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Todos = () => {
    const [todos, setTodos] = useState([])

    const get_all_todos = () => {
        let url = "https://jsonplaceholder.typicode.com/todos";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(res => {
            setTodos(res);
        })
    }

    useEffect(() => {
        get_all_todos();
    })


    return (
        <>
            <h1>My Todos</h1>
            <ol>
                {todos.map(todo => {
                    return (
                    <li>
                        <Link to={`/todo/${todo.id}`}>
                            {todo.title}
                        </Link>
                    </li>
                    )

                })}
            </ol>
        </>
    )
}

export default Todos;