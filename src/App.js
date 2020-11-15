import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/Main";
import WeatherViewer from "./components/WeatherViewer/Main";

const App = () => {
    const [query, setQuery] = useState({value: '', units: 'metric'});
    const [units, setUnits] = useState("Celsius");

    useEffect(() => {
      let ignore = false;
      const fetchCity = async () => {
        try {
          const response = await axios(process.env.REACT_APP_IP_INFO_URL);
          if (!ignore) setQuery((query) => ({...query, value: response.data.city}));
        } catch (err) {
          console.log(err);
        }
      };
      fetchCity();
      return (() => { ignore = true; });
    }, []);

    const handleQueryChange = (value) => {
      setQuery((query) => ({...query, value}));
    };
    const handleUnintsChange = (units, name) => {
      setUnits(name);
      setQuery((query) => ({...query, units}));
    }

    return (
        <React.Fragment>
            <NavBar onQueryChange={handleQueryChange} units={units} onUnitsChange={handleUnintsChange} />
            {query.value && 
              <WeatherViewer query={query} units={units} onQueryChange={handleQueryChange}/>          
            }
        </React.Fragment>
    );
};

export default React.memo(App);
