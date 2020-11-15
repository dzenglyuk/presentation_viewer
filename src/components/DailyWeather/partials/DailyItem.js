import React from "react";
import { getIcon } from "../../../utils"

const DailyItem = ({ data, units, day, onClick, isActive }) => {
    const { temp, weather, wind_speed, humidity } = data;
    const icon = getIcon(weather[0].id);
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
                    <p>{wind_speed} mps</p>
                    <p>Wind</p>
                </td>
                <td>
                    <p>{humidity}%</p>
                    <p>Humidity</p>
                </td>
        </tr>
    );
};

export default DailyItem;