import React from 'react';

const SearchItem = () => {
    return (
        <form className='search' onSubmit={(e) => e.preventDefault(e)}>
            <label htmlFor='search'>Search</label>
            <input
                type='text'
                id='search'
                role='searchbox'
                placeholder='Search Item'
            
            />

        </form>
    )
}

export default SearchItem;