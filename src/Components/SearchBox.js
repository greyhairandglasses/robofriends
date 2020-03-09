import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <input
            className='search-box'
            type='search'
            placeholder='Search Prisoners'
            onChange={searchChange}
        />
    )
}





export default SearchBox