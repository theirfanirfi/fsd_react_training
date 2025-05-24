import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

const Todo = () => {
    const [todo, setTodo] = useState({})
    const {id} = useParams()

    const fetch_single_todo = () => {
        let url = `https://jsonplaceholder.typicode.com/todos/${id}`
        fetch(url, {
            method: "GET"
        })
        .then(response => response.json())
        .then(res => {
            setTodo(res);
        })
    }

    useEffect(()=>{
        fetch_single_todo();
    })


    return (
        <>
        <h1>{todo.title}</h1>
        <p>Id: {todo.id}</p>
        <p>Complete: {todo.completed ? "Yes" : "No" }</p>
        </>

    )
}

export default Todo;