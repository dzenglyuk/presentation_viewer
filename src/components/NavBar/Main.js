import React from "react";
import Logo from "../Logo/Main";
import Search from "../Search/Main";
import Units from "../Units/Main";

import "./Main.css";

const NavBar = ({ onQueryChange, units, onUnitsChange }) => {
    return (
        <div className="navbar">
            <Logo />
            <Search onQueryChange={onQueryChange} />
            <Units units={units} onChange={onUnitsChange} />
        </div>
    );
};

export default React.memo(NavBar);
