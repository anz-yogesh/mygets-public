import React, { useContext,  useEffect } from "react";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import {
  SignOut24Filled,
  SettingsCogMultiple24Filled,
} from "@fluentui/react-icons";
import { useMsal } from "@azure/msal-react";
import { ThemeContext } from "../../App";
import { useCookies } from "react-cookie";
import { teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import Logout from "./Logout";



// Constants
const POST_LOGOUT_REDIRECT_URI = "https://jgkdrj-3000.csb.app";

const ThemeSubMenu = ({ setTheme }) => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <MenuItem>Theme</MenuItem>
    </MenuTrigger>
    <MenuPopover>
      <MenuList>
        <MenuItem onClick={() => setTheme(teamsLightTheme)}>
          Light Theme
        </MenuItem>
        <MenuItem onClick={() => setTheme(teamsDarkTheme)}>Dark Theme</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);

export const UserAvatar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { instance, accounts } = useMsal();
  const { cookies, setCookie, removeCookie } = useCookies(["myGetsToken"]);

  const user = accounts[0];
  const fullName = user?.name || "Unknown User";
  const [firstName, lastName] = fullName.split(" ");
  const userEmail = user?.username || "Unknown Email";

  const navigationLinks = [
    { path: "/marketplace", label: "Marketplace" },
    { path: "/buyerdashboard", label: "Buyer Dashboard" },
    { path: "/supplierdashboard", label: "Supplier Dashboard" },
    {
      path: "/setting",
      label: "Settings",
      icon: <SettingsCogMultiple24Filled />,
    },
  ];

  const handleLogout = async () => {
    try {
      if (user) {
        await instance.logoutRedirect({
          postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const request = {
    scopes: ["User.Read"],
    account: user || null,
  };

  useEffect(() => {
    if (request.account) {
      instance
        .acquireTokenSilent(request)
        .then((response) => {
          console.log("Successfully acquired token:", response.accessToken);
        })
        .catch((error) => {
          console.error("Failed to acquire token silently:", error);
  
          // Print scopes for debugging
          console.log("Requested Scopes:", request.scopes);
  
          // Ensure that the scopes you are requesting match what's configured in Azure AD B2C
        });
    }
  }, [request, instance]);

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton
          size="large"
          appearance="transparent"
          icon={
            <Avatar
              name={`${firstName} ${lastName}`}
              badge={{ status: "available" }}
            />
          }
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuGroupHeader>{`${firstName} ${lastName}`}</MenuGroupHeader>
        <MenuGroupHeader>{userEmail}</MenuGroupHeader>
        <MenuDivider appearance="brand" />
        <MenuGroupHeader>Dashboard</MenuGroupHeader>
        <MenuList>
          {user && (
            <Link to="/editprofile" className="no-decoration">
              <MenuItem>Edit Profile</MenuItem>
            </Link>
          )}
          <ThemeSubMenu setTheme={setTheme} />
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>Dashboard</MenuGroupHeader>
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="no-decoration"
              >
                <MenuItem icon={link.icon}>{link.label}</MenuItem>
              </Link>
            ))}
          </MenuGroup>
          <MenuDivider appearance="brand" />
          {user && <Logout />} 
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
