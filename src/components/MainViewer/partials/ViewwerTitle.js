import React from "react";
import { getDay, getMonth } from "../../../utils";

const ViewwerTitle = ({ location }) => {
    const date = new Date();
    const dayName = getDay(0);
    const day = date.getDay();
    const month = getMonth(date.getMonth());
    
    return (
        <div className="viewer-title">
            <p>
                {location}
            </p>
            <p>
                {`${dayName}, ${day} ${month}`}
            </p>
        </div>
    );
};

export default ViewwerTitle;
