import { useEffect, useState } from "react";
import { InteractionType } from "@azure/msal-browser";

const useAuthentication = (msalInstance, loginRequest) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!msalInstance.getActiveAccount()) {
      msalInstance.loginRedirect(loginRequest);
    } else {
      setIsAuthenticated(true);
    }
  }, [msalInstance, loginRequest]);

  return isAuthenticated;
};

export default useAuthentication;
