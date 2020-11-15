import React from "react";
import { getDay, getMonth } from "../../../utils";

const ViewwerTitle = ({ location, active }) => {
    const date = new Date();
    date.setDate(date.getDate() + active);
    const dayName = getDay(date.getDay());
    const day = date.getDate();
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

export default React.memo(ViewwerTitle);
