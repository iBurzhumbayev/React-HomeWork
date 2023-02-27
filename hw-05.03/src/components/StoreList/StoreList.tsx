import { ITodo } from "../../types"
import { FC } from 'react'
import StoreListItem from '../StoreListItem/StoreListItem'

interface ITodoListProps {
    store: ITodo[];
}

const StoreList: FC<ITodoListProps> = ( props : ITodoListProps ) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Open At</th>
                    <th>Close At</th>
                    <th>Distance</th>
                    <th>Special</th>
                </tr>
            </thead>
            <tbody>
                {props.store.map(store => (
                <StoreListItem key={store.id} {...store}/>
                ))}
            </tbody>
        </table>
    );
};

export default StoreList