import React from "react";
import { useRequest } from "../../hooks";

const WeatherViewer = ({ query, units }) => {
    console.log(query, units);
    const { data, loading, error } = useRequest(query.value, query.units);
    console.log(data, loading, error);
    return (
        <div>Temperature: 10&deg;{units[0]} </div>
    );
};

export default React.memo(WeatherViewer);
