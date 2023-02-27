import { Component } from 'react'
import { ITodo } from '../../types'
import './ToDoListItem.css'

interface IToDoListItemState {
    // done: boolean
    // important: boolean
}

interface ITodoListItemProps extends ITodo {
    // onDoneClick: () => void;
    // onImportantClick: () => void;
}

class StoreListItem extends Component<ITodoListItemProps, IToDoListItemState> {

    render() {
        const { id, name, openAt, closeAt, distance, special } = this.props

        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{openAt}</td>
                <td>{closeAt}</td>
                <td>{distance}</td>
                <td>{special ? "Yes" : "No"}</td>
            </tr>
        )
    }
}

export default StoreListItem