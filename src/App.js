import React, { useState, createContext }  from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader.js";
import Content from "./Components/Content/Content.js";
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
} from "@fluentui/react-components";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";



export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(teamsLightTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FluentProvider theme={theme}>
        <div className="appContainer">
          <AuthenticatedTemplate>
            <AppHeader />
            <Content />
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
            <LandingPage />
          </UnauthenticatedTemplate>
        </div>
      </FluentProvider>
    </ThemeContext.Provider>
  );
};

export default App;
