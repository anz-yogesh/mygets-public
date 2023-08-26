import React from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader.js";
import Content from "./Components/Content/Content.js";
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
} from "@fluentui/react-components";
import Auth from "./Components/Auth/Auth.js";

const App = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="appContainer">
        <AppHeader />
        <Content />
        <Auth />
      </div>
    </FluentProvider>
  );
};

export default App;
