import React from "react";
import { getIcon, getTime } from "../../../utils";

const HourlyItem = ({ data, daily }) => {
    const { dt, temp, weather } = data || {};
    const { sunrise, sunset } = daily;
    const icon = getIcon(weather[0].id, dt, sunrise, sunset);
    const time = getTime(dt);
    
    return (
        <div className="hourly-item">
            <span>{time}</span>
            <img alt="weather_icon" src={icon} />
            <span>{Math.round(temp) + "°"}</span>
        </div>
    );
};

export default React.memo(HourlyItem);
