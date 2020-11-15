import { useState, useEffect } from "react";
import axios from 'axios';

const useRequest = (query, units) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            if (query && units) {
                try {
                    setData({});
                    setError('');
                    setLoading(true);
                    const current = await axios(`${process.env.REACT_APP_WEATHER_API_BASE}weather?q=${query.replace(",", "%2C")}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`);
                    const { lon, lat } = current?.data?.coord;
                    const response = await axios(`${process.env.REACT_APP_WEATHER_API_BASE}onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_TOKEN}`);
                    if (!ignore) {
                        setData(response.data);
                        setLocation(`${current?.data?.name}, ${current?.data?.sys?.country}`);
                    }
                  } catch (err) {
                    setError(err.message);
                  } finally {
                    setLoading(false);
                }
            }
        };    
        fetchData();
        return (() => { ignore = true; });
    }, [query, units]);

    return { data, loading, error, location };
};

export default useRequest;
