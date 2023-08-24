import React from "react";
import MasterTabList from "../../Components/Common/MasterTabList";

const tabs = [
  { value: "tab1", label: "Organisation Details" },
  { value: "tab2", label: "User Managment" },
  { value: "tab3", label: "Tender Preference" },
  { value: "tab4", label: "Subscription" },
  { value: "tab5", label: "Billing" },
];

const Setting = () => {
  return <MasterTabList tabs={tabs} />;
};

export default Setting;
