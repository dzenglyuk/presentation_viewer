import React from "react";
import DailyItem from "./partials/DailyItem";

import "./Main.css";

const DailyWeather = ({ list, units, active, onActiveChange }) => {
    const handleClick = (id) => {
        if (id !== active) {
            onActiveChange(id);
        }
    };

    return (
        <div className="daily-weather">
            <p> Daily </p>
            <table>
                <tbody>
                    {list.map((item, index) => (
                        <DailyItem
                            data={item}
                            units={units}
                            key={item.dt}
                            onClick={() => handleClick(index)}
                            isActive={active === index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

DailyWeather.defaultProps = {
    list: [],
};

export default React.memo(DailyWeather);
