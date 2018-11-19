import React, {Component} from 'react';

//const SearchBar = () => {
    //return <input />
//};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state= {term: ''}
    }
    render() {
        return (
           <div className="search-bar">
           Enter Search Term:
           <input 
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />
           Value: {this.state.term}
           </div>
        );

        //return (<input onChange={event => console.log(event.target.value)}/>);
        //return (<input onChange={(this.onInputChange)}/>);
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;