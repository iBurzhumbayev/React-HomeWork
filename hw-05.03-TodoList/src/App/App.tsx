import { Component } from 'react'
import { Header, ToDoList, SearchPanel, TodoAddForm, Filter } from '../components'
import { ITodo } from '../types'

interface IAppState {
    todos: ITodo[];
    searchText: string;
    filter: string
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
                text: 'Drink Coffee',
                done: false,
                important: false
            }
        ],
        searchText: '',
        filter: 'all'
    }

    onChangeStateTodos = (id:number, action: 'done' | 'important') => {
        console.log(this.state)
        this.setState({
            todos: this.state.todos.map(item => item.id === id ? {...item, [action]: !item[action] } : item)
        });
    }

    onUpdateSearch = (searchText: string) => {
		this.setState({searchText});
	}

    search(items: ITodo[], searchText: string) {
        if(searchText.length === 0) {
            return items
        }
        return items.filter((item) => item.text.toLowerCase().includes(searchText.toLowerCase()))
        // return items.filter((item: any) => item.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    }

    onDelete = (id: number) => {
        this.setState(({todos}) => {
			return {
				todos: todos.filter(item => item.id !== id)
			}
		})
    }

    onAddTodo = (todos: ITodo) => {
        this.setState({
            todos: [...this.state.todos, todos]
        })
    }

    filterPost = (items: ITodo[], filter: string) => {
		switch (filter) {
			case 'done': 
				return items.filter(item => item.done);
			case 'important':
				return items.filter(item => item.important);
			default:
				return items
		}
	}
	onFilterSelect = (filter: string) => {
		this.setState({filter});
	}

    render() {

        const {todos, searchText, filter} = this.state; 

        const visibleData = this.filterPost(this.search(todos, searchText), filter);

        return (
            <div>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <Header title='Todo App'/>
                <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
                <ToDoList todos={visibleData} onDone={this.onChangeStateTodos} onDelete={this.onDelete}/>
                <TodoAddForm addTodo={this.onAddTodo}/>
            </div>
        )
    }
}