import React, { useState, useCallback } from "react";
import { debounce } from "../../utils";

import "./Main.css";

const Search = ({ onQueryChange, className, debounceDelay }) => {
    const [value, setValue] = useState("");
    const [empty, setEmpty] = useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleQueryChange = useCallback(() => {
            debounce((value) => {
                onQueryChange(value);
            }, debounceDelay);
        },
        [debounceDelay, onQueryChange]
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
        <form className={"search " + className} onSubmit={handleSubmit}>
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
    className: "desktop"
};

export default React.memo(Search);
