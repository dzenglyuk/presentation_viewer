import React from "react";
import Logo from "../Logo/Main";
import Search from "../Search/Main";
import Units from "../Units/Main";

import "./Main.css";

const NavBar = ({}) => {
    return (
        <div className="navbar">
            <Logo />
            <Search />
            <Units />
        </div>
    );
};

export default NavBar;
