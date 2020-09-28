import React, { Component } from 'react';
import SearchResultCard from '../components/SearchResultCard'

class SearchResultCollection extends Component {

    renderSearchResults = () => {
        return this.props.searchResults.map(searchResult => {
            return <SearchResultCard searchResult={ searchResult } key={ searchResult.id } />
        })
    }
    
    render() {
        return(
            <div className='Search-result-collection'>
                { this.renderSearchResults() }
            </div>
        )
    }
}

export default SearchResultCollection;
