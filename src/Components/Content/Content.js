import React from "react";
import "./Content.css";
// import { Marketplace } from "../../Views/Marketplace/Marketplace";
// import TenderQueries from "../../Views/TenderQueries/TenderQueries";
import { Outlet } from "react-router-dom";
const Content = () => {
  return (
    <>
      <div className="contentContainer">
        {/* <Marketplace /> */}
        {/* <TenderQueries /> */}
        <Outlet />
      </div>
    </>
  );
};

export default Content;