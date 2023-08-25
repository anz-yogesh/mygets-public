import React from "react";
import { useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../../authConfig";

function Auth() {
  const { instance, accounts } = useMsal();

  const handleLogin = async (authority) => {
    await instance.loginPopup({
      authority,
      scopes: ["openid", "profile", "offline_access"],
    });
  };

  const handleLogout = () => {
    if (accounts.length > 0) {
      instance.logoutPopup({
        account: accounts[0],
      });
    }
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
    </div>
  );
}

export default Auth;
