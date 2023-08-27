import React from "react";
import MasterTabList from "../../Components/Common/MasterTabList";
import TenderBreadcrumb from "./TenderBreadcrumb";
import { useLocation } from "react-router-dom";
import { Divider } from "@fluentui/react-components";

const tabs = [
  { value: "tab1", label: "Overview" },
  { value: "tab2", label: "Addendums" },
  { value: "tab3", label: "Queries" },
  { value: "tab4", label: "Outcome" },
];

const Tender = ({ RFx_ID }) => {
  const location = useLocation();
  const { OrganisationName, TenderTitle } = location.state;

  return (
    <div>
      <TenderBreadcrumb
        clientOrganisation={OrganisationName}
        tenderName={TenderTitle}
      />
      <MasterTabList tabs={tabs} />;
    </div>
  );
};

export default Tender;
