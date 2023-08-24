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
// import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";

import {
  SignOut24Filled,
  SettingsCogMultiple24Filled,
} from "@fluentui/react-icons";

export const UserAvatar = () => (
  <>
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton
          size="large"
          appearance="transparent"
          icon={<Avatar name="Yogesh Jain" badge={{ status: "available" }} />}
        ></MenuButton>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <Link to={"/editprofile"}>
            <MenuItem>Edit Profile</MenuItem>
          </Link>
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>Dashboard</MenuGroupHeader>
            <Link to={"/marketplace"}>
              <MenuItem>Marketplace</MenuItem>
            </Link>
            <Link to={"/buyerdashboard"}>
              <MenuItem>Buyer Dashboard</MenuItem>
            </Link>
            <Link to={"/supplierdashboard"}>
              <MenuItem>Supplier Dashboard</MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <Link to={"/setting"}>
            <MenuItem icon={<SettingsCogMultiple24Filled />}>Settings</MenuItem>
          </Link>
          <MenuDivider appearance="brand" />
          <MenuItem icon={<SignOut24Filled />}>Logout</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </>
);
