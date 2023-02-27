import { Component } from 'react'
import { Header, StoreList, StoreAddForm, SearchPanel } from '../components'
import { ITodo } from '../types'

interface IAppState {
    store: ITodo[]
    term: string
}

export default class App extends Component<{}, IAppState >{
    state = {
        store: [
            {
                id: 1,
                name: "Magnum",
                openAt: "09:00",
                closeAt: "18:00",
                distance: "5 km",
                special: false
            },
            {
                id: 2,
                name: "Small",
                openAt: "08:00",
                closeAt: "20:00",
                distance: "10 km",
                special: true
            }
        ], 
        term: ''
    }

    addStore = (store: ITodo) => {
        this.setState({
            store: [...this.state.store, store]
        })
    }

    onUpdateSearch = (term: any) => {
		this.setState({term});
	}

    search(items: any, term: any) {
        if(term.length === 0) {
            return items
        }

        return items.filter((item: any) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    render() {

        const visibleItems = this.search(this.state.store, this.state.term)

        return (
            <div>
                <Header title='Store list'/>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <StoreList store={visibleItems}/>
                <StoreAddForm addStore={this.addStore}/>
            </div>
        )
    }
}