import React, { Component } from 'react';
import SearchResultCollection from '../containers/SearchResultCollection';
import { connect } from 'react-redux';
import { logSearch } from '../actions/searchTerm';


class Search extends Component {

    state = {
        searchTerm: '',
        searchResults: []
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    fetchSearchResults = () => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=story`)
            .then(resp => resp.json())
            .then(searchResultsJSON => this.setState({
                searchResults: searchResultsJSON.hits
            }))
    }

    submitSearch = (e) => {
        e.preventDefault()
        this.fetchSearchResults()
        this.props.logSearch(this.state.searchTerm)
    }

    render() {
        console.log(this.state.searchTerm)
        return(
            <div className='Search'>
                <h1 className='Page-title'>Hacker News Browser</h1>
                <form onSubmit={ (e) => this.submitSearch(e) }>
                    <input className='Search-bar' id='search' onChange={ this.handleChange }
                        name='searchTerm' type='text' value={ this.state.searchTerm }
                        fontSize='18px' placeholder='Enter a search term' autoComplete='off'
                    />
                    <button className='Search-button'>Search</button>
                </form>
                <SearchResultCollection searchResults={ this.state.searchResults } />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { logSearch: (searchTerm) => { dispatch(logSearch(searchTerm)) } }
};

export default connect(null, mapDispatchToProps)(Search);
