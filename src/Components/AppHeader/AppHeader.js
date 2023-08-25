import React from "react";
import { UserAvatar } from "./UserAvatar";
import { Bot24Regular, Alert24Regular } from "@fluentui/react-icons";
import { Search } from "./Search";
import { makeStyles } from "@fluentui/react-components";
import "./AppHeader.css";

const useIconStyles = makeStyles({
  icon: {
    ":hover": {
      color: "purple", // You can add specific hover styles here
    },
  },
});

const AppHeaderBar = () => {
  const styles = useIconStyles();

  return (
    <>
      {/* Header Section */}
      <div className="container">
        <div className="appHeaderLeft">
          <h3 className="title">MYGETS</h3>
        </div>
        <div className="appHeaderCenter">
          <Search />
        </div>
        <div className="appHeaderRight">
          <Bot24Regular
            aria-label="A Bot icon"
            style={{ color: "#f5f5f5f5" }}
          />
          <Alert24Regular
            aria-label="An Alert icon"
            style={{ color: "#f5f5f5f5" }}
          />
          <UserAvatar />
        </div>
      </div>
    </>
  );
};

export default AppHeaderBar;
