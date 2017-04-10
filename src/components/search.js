import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            term : ''
        };
    }

    render() {
        return (
           <div className="container"> 
            <div className="row">
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
           </div>
           </div>
           </div>
        );
        
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default Search;