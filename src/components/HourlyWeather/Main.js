import React, { useLayoutEffect, useState } from "react";
import HourlyItem from "./partials/HourlyItem";
import { getHours } from "../../utils";

import "./Main.css";

const HourlyWeather = ({ list, active, daily }) => {
    const [centerAlign, setCenterAlign] = useState(false);
    const items = getHours(list, active);

    const handleScroll = () => {
        let elem = document.querySelector('.hourly-weather_items-container');
        if (elem?.scrollWidth > elem?.clientWidth) {
            setCenterAlign(false);
        } else {
            setCenterAlign(true);
        }
    }

    useLayoutEffect(() => {
        handleScroll();
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("resize", handleScroll);
        };
    });

    return (
        <div className="hourly-weather">
            <p> Hourly </p>
            <div className={`hourly-weather_items-container ${centerAlign ? "center" : ""}`}>
                {items.map(item => (
                    <HourlyItem
                        data={item}
                        key={item.dt}
                        daily={daily[active]}
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(HourlyWeather);
