import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

import "./Main.css";

const { Option } = Select;

const Units = ({ units, onChange }) => {
    const unitsList = [
        { value: "standard", title: "Kelvin" },
        { value: "imperial", title: "Fahrenheit" },
        { value: "metric", title: "Celsius" }
    ];
    const handleChange = (value) => {
        const name = unitsList.find(el => el.value === value)?.title;
        onChange(value, name);
    }
    
    return (
        <div className="units">
            <Select
                value={units}
                onChange={handleChange}
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

export default React.memo(Units);
