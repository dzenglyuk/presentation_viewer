import React from "react";
import { getIcon, getTime } from "../../../utils";

const HourlyItem = ({ data }) => {
    const { dt, temp, weather } = data || {};
    const icon = getIcon(weather[0].id);
    const time = getTime(dt);
    
    return (
        <div className="hourly-item">
            <span>{time}</span>
            <img alt="weather_icon" src={icon} />
            <span>{Math.round(temp) + "°"}</span>
        </div>
    );
};

export default HourlyItem;
