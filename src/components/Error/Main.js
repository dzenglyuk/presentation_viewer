import React from "react";

import "./Main.css";

const Error = ({ message }) => {
    return (
        <div className="error">
            <h1> Oops! </h1>
            <h3> {message} </h3>
            <h4> Try again or use another location. </h4>
        </div>
    );
};

Error.defaultProps = {
    message: "We can't seem to find the location you're looking for."
};

export default React.memo(Error);