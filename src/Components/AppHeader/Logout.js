import React from "react";
import { Button } from "@fluentui/react-components";
import { SignOut24Filled } from "@fluentui/react-icons";

const Login = () => {
  const handleClick = () => {
    // do something to logout
  };

  return (
    <Button
      appearance="transparent"
      icon={<SignOut24Filled style={{ color: "#f5f5f5" }} />} // Apply color here
      onClick={handleClick}
    ></Button>
  );
};

export default Login;
