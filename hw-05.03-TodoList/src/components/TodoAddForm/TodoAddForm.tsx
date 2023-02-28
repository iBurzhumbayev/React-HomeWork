import { ChangeEvent, Component } from 'react'
import { ITodo } from '../../types'

interface IAddStoreFormState {
    addTodo: (todos: ITodo) => void
}

class TodoAddForm extends Component<IAddStoreFormState> {

    state = {
        text: '',
    }

    onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            text: this.state.text,
            done: false,
            important: false
        }
        this.setState({
            text: '',
        })
        this.props.addTodo(newTodo);
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    placeholder='Todo'
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.onValueChange}
                />
                <button disabled={this.state.text.length === 0} type="submit">Add Todo</button>
            </form>
        )
    }
}

export default TodoAddForm;