import React from "react";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../../authConfig";
import App from "../../App";

function Auth() {
  const { instance, accounts } = useMsal();

  const handleLogin = async (authority) => {
    await instance.loginPopup({
      authority,
      scopes: ["openid", "profile", "offline_access"],
    });
  };

  const handleLogout = () => {
    instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
  };

  return (
    <div>
      <button
        onClick={() => handleLogin(b2cPolicies.authorities.signIn.authority)}
      >
        Sign In
      </button>
      <button
        onClick={() => handleLogin(b2cPolicies.authorities.signUp.authority)}
      >
        Sign Up
      </button>
      <button onClick={handleLogout}>Logout</button>

      <AuthenticatedTemplate>
        <App />
      </AuthenticatedTemplate>
    </div>
  );
}

export default Auth;
