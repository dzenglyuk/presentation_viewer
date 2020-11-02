import React from "react";
import DailyItem from "./partials/DailyItem";
import { getDay } from "../../utils"

import "./Main.css";

const DailyWeather = ({ list, units }) => {
    return(
        <div className="daily-weather">
            <table>
                <tbody>
                    {list.map((item, index) => (
                        <DailyItem data={item} units={units} key={item.dt} day={getDay(index)}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

DailyWeather.defaultProps = {
    list: []
};

export default React.memo(DailyWeather);