import React from "react";
import { SignOut24Filled } from "@fluentui/react-icons";
import { useMsal } from "@azure/msal-react";
import { MenuItem} from "@fluentui/react-components";

// Constants
const POST_LOGOUT_REDIRECT_URI = "https://jgkdrj-3000.csb.app";

const Logout = () => {
  const { instance, accounts } = useMsal();

  const handleLogout = async () => {
    try {
      if (accounts.length > 0) {
        await instance.logoutRedirect({
          postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MenuItem icon={<SignOut24Filled />} onClick={handleLogout}>
      Logout
    </MenuItem>
  );
};

export default Logout;
