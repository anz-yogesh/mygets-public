import React from 'react';
import {
  Button,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { MoreHorizontalRegular, MoreHorizontalFilled, bundleIcon } from "@fluentui/react-icons";

const MoreHorizontalIcon = bundleIcon(
  MoreHorizontalFilled,
  MoreHorizontalRegular
);

export const ActionButton = ({ menuOpen, handleMoreClick, handleMenuClose, selectedItem, item }) => {

  
  return (
    <>
      <Button
        icon={<MoreHorizontalIcon />}
        appearance="subtle"
        aria-label="More actions"
        onClick={() => handleMoreClick(item)}
      />
      {menuOpen && selectedItem === item && (
        <MenuPopover open={menuOpen} onOpenChange={handleMenuClose}>
          <MenuList>
            <MenuItem
              content="View Tender"
              onClick={() => console.log("View Tender:", selectedItem)}
            />
            <MenuItem
              content="Subscribe Tender"
              onClick={() => console.log("Subscribe Tender:", selectedItem)}
            />
          </MenuList>
        </MenuPopover>
      )}
    </>
  );
};
