import React, { useState } from "react";
import NavBar from "./components/NavBar/Main";
import WeatherViewer from "./components/WeatherViewer/Main";

//Have to create debouncer for api request

const App = () => {
    const [data, setData] = useState({});
    const [units, setUnits] = useState("metric");

    const handleData = (newData) => setData(newData);
    const handleUnints = (newUnits) => setUnits(newUnits);

    return (
        <React.Fragment>
            <NavBar onData={handleData} units={units} onUnitsChange={handleUnints} />
            <WeatherViewer data={data} units={units} />
        </React.Fragment>
    );
};

export default App;
