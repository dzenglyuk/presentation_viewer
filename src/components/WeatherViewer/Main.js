import React, { useState } from "react";
import Spinner from "../Spinner/Main";
import DailyWeather from "../DailyWeather/Main";
import MainViewer from "../MainViewer/Main";
import { useRequest } from "../../hooks";
import { isEmpty } from "../../utils";

import "./Main.css";

const WeatherViewer = ({ query, units }) => {
    const { data, loading, error, location } = useRequest(query.value, query.units);
    const { daily, current } = data || {};
    
    return (
        <div className="weather-viewer">
            {loading && <Spinner />}
            {!isEmpty(error) && error}
            {!isEmpty(data) &&
                <React.Fragment>
                    <MainViewer list={daily} current={current} units={units} location={location}/>
                    <DailyWeather list={daily} units={units}/>
                </React.Fragment>
            }
        </div>
    );
};

export default React.memo(WeatherViewer);
