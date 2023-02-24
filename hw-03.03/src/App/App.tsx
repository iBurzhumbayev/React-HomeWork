import { Component } from 'react'
import { Header, ToDoList } from '../components'
import { ITodo } from '../types'

interface IAppState {
    todos: ITodo[]
}

export default class App extends Component<{}, IAppState >{
    state = {
        todos: [
            {
                id: 1,
                text: 'Learn React',
                done: false,
                important: false
            },
            {
                id: 2,
                text: 'Drink Coffe',
                done: false,
                important: false
            }
        ]
    }

    onChangeStateTodos = (id:number, action: 'done' | 'important') => {
        console.log(this.state)
        this.setState({
            todos: this.state.todos.map(item => item.id === id ? {...item, [action]: !item[action] } : item)
        });
    }

    render() {

        return (
            <div>
                <Header title='Todo App'/>
                <ToDoList todos={this.state.todos} onDone={this.onChangeStateTodos}/>
            </div>
        )
    }
}