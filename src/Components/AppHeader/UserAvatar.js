import React, { useContext, useState } from "react";
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
  Label,
} from "@fluentui/react-components";
import { teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import {
  SignOut24Filled,
  SettingsCogMultiple24Filled,
} from "@fluentui/react-icons";
import { useMsal } from "@azure/msal-react";
import { ThemeContext } from "../../App";

// Helper Component: Theme Sub-Menu
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

// Main Component: User Avatar
export const UserAvatar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { instance, accounts } = useMsal();
  const fullName = accounts[0]?.name || "Unknown User";
  const [firstName, lastName] = fullName.split(" "); // Fetch user names from token
  const userEmail = accounts[0]?.username || "Unknown Email"; // Fetch user email
  const [accessToken, setAccessToken] = useState(null); // Manage the access token

  // Define navigation links and settings
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

  // Define logout behavior
  const handleLogout = () => {
    if (accounts.length > 0) {
      instance.logoutRedirect({
        postLogoutRedirectUri: "http://localhost:3000",
      });
    }
  };

  // Define the 'request' object within the UserAvatar component
  const request = {
    scopes: ["User.Read"], // define your scopes here
    account: accounts.length > 0 ? accounts[0] : null,
  };

  // Fetch the access token silently
  if (request.account) {
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        console.log("Access Token:", response.accessToken);
      })
      .catch((error) => {
        console.error("Failed to acquire token silently:", error);
        // Additional error handling here
      });
  }

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
          <Link to="/editprofile" style={{ textDecoration: "none" }}>
            <MenuItem>Edit Profile</MenuItem>
          </Link>
          <ThemeSubMenu setTheme={setTheme} />
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>Dashboard</MenuGroupHeader>
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <MenuItem icon={link.icon}>{link.label}</MenuItem>
              </Link>
            ))}
          </MenuGroup>
          <MenuDivider appearance="brand" />
          <MenuItem icon={<SignOut24Filled />} onClick={handleLogout}>
            Logout
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
