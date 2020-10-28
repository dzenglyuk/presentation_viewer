import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

import "./Main.css";

const { Option } = Select;

const Units = ({ value, onChange }) => {
    const unitsList = [
        { value: "standard", title: "Kelvin" },
        { value: "imperial", title: "Fahrenheit" },
        { value: "metric", title: "Celsius" },
    ];
    return (
        <div className="units">
            <Select
                // defaultValue={value}
                value={value}
                onChange={onChange}
                className="select"
            >
                {unitsList.map((unit) => (
                    <Option value={unit.value} key={unit.value}>{unit.title}</Option>
                ))}
            </Select>
        </div>
    );
};

Units.defaultProps = {
    value: "metric",
};

export default Units;
