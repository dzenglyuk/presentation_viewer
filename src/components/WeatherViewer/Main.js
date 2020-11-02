import React, { useState } from "react";
import Spinner from "../Spinner/Main";
import DailyWeather from "../DailyWeather/Main";
import MainViewer from "../MainViewer/Main";
import { useRequest } from "../../hooks";

import "./Main.css";

const WeatherViewer = ({ query, units }) => {
    const { data, loading, error } = useRequest(query.value, query.units);
    const { daily } = data || {};

    return (
        <div className="weather-viewer">
            {loading && <Spinner />}
            {/* {error != {} && error} */}
            {data &&
                <React.Fragment>
                    <MainViewer />
                    <DailyWeather list={daily} units={units}/>
                </React.Fragment>
            }
        </div>
    );
};

export default React.memo(WeatherViewer);
