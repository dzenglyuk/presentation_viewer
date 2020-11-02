import React from "react";
import { getIcon } from "../../../utils"

const DailyItem = ({ data, units, day, onClick }) => {
    const { dt, temp, weather, wind_speed, humidity } = data;
    const icon = getIcon(weather[0].id);
    console.log(data);
    return(
        <tr onClick={() => onClick(dt)} className="daily-item">
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
                    <p>Low</p>
                </td>
                <td>
                    <p>{wind_speed} mph</p>
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