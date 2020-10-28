import React from "react";

import "./Main.css";

const Search = () => {
    const placeholder = "Search by City name, ID or ZIP code";
    return (
        <form className="search">
            <input type="text" placeholder={placeholder}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
