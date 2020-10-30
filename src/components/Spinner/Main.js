import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';

import "./Main.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <Spin tip="Loading..." size="large"/>
        </div>
    );
};

export default Spinner;
