import React from "react";
import { getIcon } from "../../../utils";

const Viewer = ({ item, current }) => {
    const { temp, weather } = item;
    const tempValue = current ? temp : (temp?.min + temp?.max)/2; 
    const icon = getIcon(weather[0]?.id);
    const desc = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1);

    return (
        <div className="viewer">
            <div>
                <img alt="Weather icon" src={icon}/>
            </div>
            <div>
                <div>
                    <p className="viewer_big-temp">{Math.round(tempValue)}&deg;</p>
                    <p className="viewer_description">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Viewer;
