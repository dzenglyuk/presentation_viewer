import React from "react";
import ViewwerTitle from "./partials/ViewwerTitle";
import Viewer from "./partials/Viewer";
import Details from "./partials/Details";

import "./Main.css";

const MainViewer = ({ list, units, current, location }) => {
    const item = list && list[0];
    return(
        <div className="main-viewer">
            <ViewwerTitle location={location}/>
            <div className="viewer-container">
                <Viewer item={current} units={units}/>
                <Details item={item} units={units}/>
            </div>
        </div>
    );
};

export default React.memo(MainViewer);