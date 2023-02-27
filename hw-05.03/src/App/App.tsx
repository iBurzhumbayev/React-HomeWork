import { Component } from 'react'
import { Header, StoreList, StoreAddForm } from '../components'
import { ITodo } from '../types'

interface IAppState {
    store: ITodo[]
}

export default class App extends Component<{}, IAppState >{
    state = {
        store: [
            {
                id: 1,
                name: "Store A",
                openAt: "09:00",
                closeAt: "18:00",
                distance: "5 km",
                special: false
            },
            {
                id: 2,
                name: "Store B",
                openAt: "08:00",
                closeAt: "20:00",
                distance: "10 km",
                special: true
            }
        ]
    }

    addStore = (store: ITodo) => {
        this.setState({
            store: [...this.state.store, store]
        })
    }

    render() {

        return (
            <div>
                <Header title='Store list'/>
                <StoreList store={this.state.store}/>
                <StoreAddForm addStore={this.addStore}/>
            </div>
        )
    }
}