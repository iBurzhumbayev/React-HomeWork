import { Component } from 'react';

interface SearchPanelState {
    onUpdateSearch: (searchText: string) => void
}

class SearchPanel extends Component<SearchPanelState>{
    constructor(props: any) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    onUpdateSearch = (e: any) => {
        const searchText = e.target.value;
        console.log(searchText)
        this.setState({searchText});
        this.props.onUpdateSearch(searchText)
    }

    render () {
        return (
            <input type="text"
                    placeholder="Search Store"
                    onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;