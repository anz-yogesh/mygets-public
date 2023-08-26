import React from "react";
import "./Content.css";
import { Outlet } from "react-router-dom";
const Content = () => {
  return (
    <>
      <div className="contentContainer">
        <Outlet />
      </div>
    </>
  );
};

export default Content;
