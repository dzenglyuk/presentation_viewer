import React from "react";
import { getIcon, getDay } from "../../../utils";

const DailyItem = ({ data, units, onClick, isActive }) => {
    const { dt, temp, weather, wind_speed, humidity, sunrise, sunset } = data;
    const icon = getIcon(weather[0].id, dt, sunrise, sunset);   
    const day = getDay(new Date(dt * 1000).getDay());
    
    return(
        <tr onClick={onClick} className={isActive ? 'daily-item active' : 'daily-item'}>
                <td>{day}</td>
                <td>
                    <img alt="weather_icon" src={icon} />
                </td>
                <td>
                    <p>{Math.round(temp.min)}&deg;{units[0]}</p>
                    <p>Low</p>
                </td>
                <td>
                    <p>{Math.round(temp.max)}&deg;{units[0]}</p>
                    <p>High</p>
                </td>
                <td>
                    <p>{Math.round(wind_speed)} mps</p>
                    <p>Wind</p>
                </td>
                <td>
                    <p>{humidity}%</p>
                    <p>Humidity</p>
                </td>
        </tr>
    );
};

export default React.memo(DailyItem);