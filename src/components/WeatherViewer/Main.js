import React, { useState } from "react";
import Search from "../Search/Main";
import Spinner from "../Spinner/Main";
import DailyWeather from "../DailyWeather/Main";
import MainViewer from "../MainViewer/Main";
import HourlyWeather from "../HourlyWeather/Main";
import Error from "../Error/Main";
import { useRequest } from "../../hooks";
import { isEmpty } from "../../utils";

import "./Main.css";

const WeatherViewer = ({ query, units, onQueryChange}) => {
    const [active, setActive] = useState(0);
    const { data, loading, error, location } = useRequest(query.value, query.units);
    const { daily, hourly, current } = data || {};
    const showHourly = active === 0 || active === 1;
    
    const handleActiveChange = (num) => {
        setActive(num);
    };
    
    return (
        <div className="weather-viewer">
            <Search onQueryChange={onQueryChange} className="mobile" />
            {loading && <Spinner />}
            {error && <Error />}
            {!isEmpty(data) &&
                <React.Fragment>
                    <MainViewer list={daily} current={current} units={units} location={location} active={active}/>
                    {showHourly &&
                        <HourlyWeather list={hourly} daily={daily} active={active} />                
                    }
                    <DailyWeather list={daily} units={units} active={active} onActiveChange={handleActiveChange}/>
                </React.Fragment>
            }
        </div>
    );
};

export default React.memo(WeatherViewer);
