import React, { useState, useCallback } from "react";
import { debounce } from "../../utils";

import "./Main.css";

const Search = ({ onQueryChange, debounceDelay }) => {
    const [value, setValue] = useState("");
    const [empty, setEmpty] = useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleQueryChange = useCallback(
        debounce((value) => {
            onQueryChange(value);
        }, debounceDelay),
        []
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmpty(false);
        if (value) {
            handleQueryChange(value);
        } else {
            setEmpty(true);
        }
    };
    const placeholder = "Search by City name or ZIP code";
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                type="text"
                className={empty ? "empty" : null}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

Search.defaultProps = {
    debounceDelay: 500,
};

export default React.memo(Search);
