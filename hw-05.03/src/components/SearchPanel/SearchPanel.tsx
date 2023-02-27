import { Component } from 'react';

interface SearchPanelState {
    onUpdateSearch: (term: string) => void
}

class SearchPanel extends Component<SearchPanelState>{
    constructor(props: any) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e: any) => {
        const term = e.target.value;
        console.log(term)
        this.setState({term});
        this.props.onUpdateSearch(term)
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