import React, { useMemo } from "react";
import { getTime } from "../../../utils";

const Details = ({ item, units }) => {
    const { dt, temp, wind_speed, humidity, sunrise, sunset } = item;
    const { min, max } = temp;

    const list = useMemo(() => ([
        { desc: "High", value: Math.round(max) + "°" + units[0]},
        { desc: "Wind", value: wind_speed + " mph" },
        { desc: "Sunrise", value: getTime(sunrise)},
        { desc: "Low", value: Math.round(min) + "°" + units[0]},
        { desc: "Humidity", value: humidity + "%"},
        { desc: "Sunset", value: getTime(sunset)}
    ]), [temp, wind_speed, humidity, sunrise, sunset]);

    return (
        <div className="details">
            {list.map(item => (
                <div key={item.desc}>
                    <p>{item.value}</p>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Details;
