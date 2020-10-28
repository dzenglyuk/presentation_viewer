import React from "react";
import NavBar from "./components/NavBar/Main";
import WeatherViewer from "./components/WeatherViewer/Main";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <WeatherViewer />
    </React.Fragment>
  );
};

export default App;
