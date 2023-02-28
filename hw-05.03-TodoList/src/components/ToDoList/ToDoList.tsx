import ToDoListItem from "../ToDoListitem/ToDoListItem"
import { ITodo } from "../../types"
import { FC } from 'react'

interface ITodoListProps {
    todos: ITodo[];
    onDone: (id: number, action: 'done' | 'important') => void;
    onDelete: (id: number) => void;
}

const ToDoList: FC<ITodoListProps> = ( props : ITodoListProps ) => {

    return (
        <ul>
            {props.todos.map(item => 
                <ToDoListItem 
                key={item.id} {...item} 
                onDoneClick = {() => props.onDone(item.id, 'done')} 
                onImportantClick = {() => props.onDone(item.id, 'important')} 
                onDeleteClick={() => props.onDelete(item.id)}/>
            )}
        </ul>
    )
}

export default ToDoList