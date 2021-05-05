import React from 'react';
import './SearchBar.css'

function SearchBar(props) {

    return (
        <div className = 'BarContainer'>
            <input type = 'text' value = {props.input} onChange = {props.onChange} />

        </div>
    );
}

export default SearchBar;