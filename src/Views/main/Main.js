import React from "react";
import AppHeaderBar from "../../Components/AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <AppHeaderBar />

      <Outlet />
    </div>
  );
};

export default Main;
