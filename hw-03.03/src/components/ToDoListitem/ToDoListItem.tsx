import { Component } from 'react'
import { ITodo } from '../../types'
import './ToDoListItem.css'

interface IToDoListItemState {
    done: boolean
    important: boolean
}

interface ITodoListItemProps extends ITodo {
    onDoneClick: () => void;
    onImportantClick: () => void;
}

class ToDoListItem extends Component<ITodoListItemProps, IToDoListItemState> {

    render() {
        const { text, done, important } = this.props

        let classNames = '';

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }
        return (
            <li className={classNames}>
                { text }
                <button onClick={this.props.onDoneClick}>{done ? 'Cancel' : 'Done'}</button>
                <button onClick={this.props.onImportantClick}>{important ? 'Cancel' : 'Important'}</button>
            </li>
        )
    }
}

export default ToDoListItem