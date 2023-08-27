import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  Avatar,
  CounterBadge,
} from "@fluentui/react-components";
import "./Marketplace.css";
import data from "./data.json";
import { ActionButton } from "./ActionButton";
import { InfoLabel } from "@fluentui/react-components/unstable";
import MarketplaceSections from "./MarketplaceSections";
import { useNavigate } from "react-router-dom";

export const Marketplace = () => {
  const navigate = useNavigate();
  const handleRowClick = (RFx_ID, OrganisationName, TenderTitle) => {
    navigate(`/tenderdetail/${RFx_ID}`, {
      state: { OrganisationName, TenderTitle },
    });
  };

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleMoreClick = (item) => {
    setMenuOpen(true);
    setSelectedItem(item);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="marketplaceContainer">
      <div className="heading">
        Welcome to the New Zealand Electronic Tenders Marketplace (MyGETS)
      </div>
      <MarketplaceSections />

      <Table aria-label="Table with cell actions">
        <TableHeader>
          <TableRow>
            {data.columns.map((column, index) => (
              <TableHeaderCell key={column.columnKey}>
                {column.label}
                {index === 0 && (
                  <InfoLabel info="This is a system generate Code." required />
                )}{" "}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.items.map((item) => (
            <TableRow
              key={item.RFx_ID}
              onClick={() =>
                handleRowClick(item.RFx_ID, item.Organisation.Name, item.Title)
              }
            >
              <TableCell>{item.RFx_ID}</TableCell>
              <TableCell>{item.Reference}</TableCell>
              <TableCell>{item.Title}</TableCell>
              <TableCell>{item.Tender_Type}</TableCell>
              <TableCell>{item.Close_Date}</TableCell>
              <TableCell>{item.Organisation.Name}</TableCell>
              <TableCell>
                {item.Organisation.Action}

                <TableCellLayout
                  media={
                    <Avatar
                      shape="square"
                      aria-label={item.Organisation.Name}
                      name={item.Organisation.Name}
                      image={item.Organisation.Avatar} // Including the avatar image URL
                      badge={{
                        children: (
                          <CounterBadge
                            count={5}
                            shape="circular"
                            size="small"
                          />
                        ),
                      }}
                    />
                  }
                >
                  <ActionButton
                    menuOpen={menuOpen}
                    handleMoreClick={handleMoreClick}
                    handleMenuClose={handleMenuClose}
                    selectedItem={selectedItem}
                    item={item}
                  />
                </TableCellLayout>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
