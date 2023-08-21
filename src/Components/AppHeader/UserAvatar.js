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
  Link,
} from "@fluentui/react-components";
import { Link as RouterLink } from "react-router-dom";
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
          <Link as={RouterLink} to={"/editprofile"}>
            <MenuItem>Edit Profile</MenuItem>
          </Link>
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>Dashboard</MenuGroupHeader>

            <Link to={"/marketplace"}>
              <MenuItem>Marketplace</MenuItem>
            </Link>
            <MenuItem>Buyer</MenuItem>
            <MenuItem>Supplier</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuItem icon={<SettingsCogMultiple24Filled />}>Settings</MenuItem>
          <MenuDivider appearance="brand" />
          <MenuItem icon={<SignOut24Filled />}>Logout</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  </>
);
