import * as React from "react";
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

export const UserAvatar = () => {
  const linkStyle = { textDecoration: "none" };

  // Navigation links including settings
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

  // Logout function (update as needed)
  const handleLogout = () => {
    console.log("Logging out...");
    // Perform logout action here
  };

  const ThemeSubMenu = () => {
    return (
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuItem>Theme</MenuItem>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>Light Theme</MenuItem>
            <MenuItem>Dark Theme</MenuItem>
            <MenuItem>High Contrast</MenuItem>
            <MenuItem>System Default</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  };

  return (
    <>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton
            size="large"
            appearance="transparent"
            icon={<Avatar name="Yogesh Jain" badge={{ status: "available" }} />}
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <Link to="/editprofile" style={linkStyle}>
              <MenuItem>Edit Profile</MenuItem>
            </Link>
            <ThemeSubMenu />
            <MenuDivider />
            <MenuGroup>
              <MenuGroupHeader>Dashboard</MenuGroupHeader>
              {navigationLinks.map((link) => (
                <Link key={link.path} to={link.path} style={linkStyle}>
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
    </>
  );
};
