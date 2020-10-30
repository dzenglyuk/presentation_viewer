import React, { useState, useEffect } from "react";
import axios from 'axios';

const useRequest = (query, units) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    
    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            if (query && units) {
                try {
                    setLoading(true);
                    const response = await axios(`${process.env.REACT_APP_WEATHER_API_BASE}weather?q=${query}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`);
                    if (!ignore) setData(response.data);
                  } catch (err) {
                    setError(err);
                  } finally {
                    setLoading(false);
                }
            }
        };    
        fetchData();
        return (() => { ignore = true; });
    }, [query, units]);

    return { data, loading, error };
};

export default useRequest;
