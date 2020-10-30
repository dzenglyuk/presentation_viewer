import React, { useState, useCallback } from "react";
import { debounce } from "../../utils";

import "./Main.css";

const Search = ({ onQueryChange, debounceDelay }) => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleQueryChange = useCallback(debounce((value) => {
        onQueryChange(value);
    }, debounceDelay), []);
    const handleSubmit =(event) => {
        event.preventDefault();
        handleQueryChange(value);
    }
    const placeholder = "Search by City name, ID or ZIP code";
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} value={value} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
    );
};

Search.defaultProps = {
    debounceDelay: 1000
};

export default React.memo(Search);
