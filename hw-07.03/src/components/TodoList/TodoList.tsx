import {useEffect, useState} from "react";
import apiClient from "../../common/api";
import { ITodo, IUser } from "../../common/models";

const TodoList = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getTodos = async() => {
        try {
            const res = await apiClient.get('/todos')
            console.log({res})
            setTodos(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    const getUsers= async() => {
        try {
            const res = await apiClient.get('/users')
            console.log({res})
            setUsers(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getTodos()
        getUsers()
    }, [])

    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    const getUserById = (id:number) => users.find(user => user.id === id);

    return (
        <>
            {todos.map(todo => {
                const user = getUserById(todo.userId);

                if (!user) {
                    return null;
                }

                return (
                    <div key={todo.id} >
                        <h4 style={{ color: todo.completed ? 'green' : '' }}><span style={{color: 'black'}}>Task:</span> {todo.title}</h4>
                        <p>Author: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <hr/>
                    </div>
                );
            })}
        </>
    )
}

export default TodoList;

