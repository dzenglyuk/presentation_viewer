import React, { useState } from "react";
import Spinner from "../Spinner/Main";
import DailyWeather from "../DailyWeather/Main";
import MainViewer from "../MainViewer/Main";
import Error from "../Error/Main";
import { useRequest } from "../../hooks";
import { isEmpty } from "../../utils";

import "./Main.css";

const WeatherViewer = ({ query, units }) => {
    const [active, setActive] = useState(0);
    const { data, loading, error, location } = useRequest(query.value, query.units);
    const { daily, current } = data || {};
    
    const handleActiveChange = (num) => {
        setActive(num);
    };
    
    return (
        <div className="weather-viewer">
            {loading && <Spinner />}
            {error && <Error />}
            {!isEmpty(data) &&
                <React.Fragment>
                    <MainViewer list={daily} current={current} units={units} location={location} active={active}/>
                    <DailyWeather list={daily} units={units} active={active} onActiveChange={handleActiveChange}/>
                </React.Fragment>
            }
        </div>
    );
};

export default React.memo(WeatherViewer);
