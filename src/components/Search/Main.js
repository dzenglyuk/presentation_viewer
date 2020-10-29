import React from "react";
import { debounce } from "../../utils/";

import "./Main.css";

const Search = ({ onData }) => {
    const placeholder = "Search by City name, ID or ZIP code";
    const handleSubmit = (event) => {
        event.preventDefault();
        onData(event.target.data);
    };
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default React.memo(Search);
