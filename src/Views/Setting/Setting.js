import React from "react";
import MasterTabList from "../../Components/Common/MasterTabList";

const tabs = [
  { value: "tab1", label: "Organisation Details" },
  { value: "tab2", label: "Users & Role Management" },
  { value: "tab3", label: "Team Management" },
  { value: "tab4", label: "Tender Preference" },
  { value: "tab5", label: "Subscription" },
  { value: "tab6", label: "Billing" },
];

const Setting = () => {
  return <MasterTabList tabs={tabs} />;
};

export default Setting;
