import React from "react";
import ViewwerTitle from "./partials/ViewwerTitle";
import Viewer from "./partials/Viewer";
import Details from "./partials/Details";

import "./Main.css";

const MainViewer = ({ list, units, current, location, active }) => {
    const item = list && list[active];

    return(
        <div className="main-viewer">
            <ViewwerTitle location={location} active={active}/>
            <div className="viewer-container">
                <Viewer item={active === 0 ? current : item} current={active === 0} />
                <Details item={item} units={units}/>
            </div>
        </div>
    );
};

MainViewer.defaultProps = {
    active: 0
};

export default React.memo(MainViewer);