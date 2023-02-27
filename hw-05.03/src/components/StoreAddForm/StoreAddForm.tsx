import { Component } from 'react'
import { ITodo } from '../../types'

interface IAddStoreFormState {
    name: string;
    openAt: string;
    closeAt: string;
    distance: string;
    special: boolean;
}

class StoreAddForm extends Component<IAddStoreFormState> {

    state = {
        name: '',
        openAt: '',
        closeAt: '',
        distance: '',
        special: false
    }

    onValueChange = (e: any) => {
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newStore: ITodo = {
            id: Math.random(),
            name: this.state.name,
            openAt: this.state.openAt,
            closeAt: this.state.closeAt,
            distance: this.state.distance,
            special: this.state.special
        }
        this.setState({
            name: '',
            openAt: '',
            closeAt: '',
            distance: '',
            special: false
        })
        // @ts-ignore
        this.props.addStore(newStore);
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    placeholder='Store Name'
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.onValueChange}
                />
                <label>Open At</label>
                <input
                    placeholder='Open At'
                    type="time"
                    name="openAt"
                    id="openAt"
                    value={this.state.openAt}
                    onChange={this.onValueChange}
                />
                <label>Close At</label>
                <input
                    placeholder='Close At'
                    type="time"
                    name="closeAt"
                    id="closeAt"
                    value={this.state.closeAt}
                    onChange={this.onValueChange}
                />
                <input
                    placeholder='Distance'
                    type="text"
                    name="distance"
                    id="distance"
                    value={this.state.distance}
                    onChange={this.onValueChange}
                />
                <label>Special</label>
                <input
                    type="checkbox"
                    name="special"
                    id="special"
                    checked={this.state.special}
                    onChange={this.onValueChange}
                />
                <button type="submit">Add Store</button>
            </form>
        )
    }
}

export default StoreAddForm;