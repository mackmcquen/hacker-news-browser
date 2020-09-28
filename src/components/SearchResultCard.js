import React, { Component } from 'react'

class SearchResultCard extends Component {

    render() {
        return(
            <div className='Search-result-card'>
                <a href={`${ this.props.searchResult.url }`} target='_blank' rel='noopener noreferrer'>
                    <h1 className='Search-result-title'>{ this.props.searchResult.title }</h1>
                </a>
                <p></p>
            </div>
        )
    }
}

export default SearchResultCard;
