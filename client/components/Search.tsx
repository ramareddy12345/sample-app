import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <button className="search-bar__submit"><FiSearch className="search-icon" aria-label="submit search"/></button>
            <input type='text' className="search-bar__input" placeholder="enter your search" aria-label="search"></input>
            
        </div>  
    );
};

export default SearchBar;
