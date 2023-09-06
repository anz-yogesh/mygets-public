import React from "react";
import MasterTabList from "../../Components/Common/MasterTabList";

const tabs = [
  { value: "tab1", label: "Open Tenders" },
  { value: "tab2", label: "Future Tenders" },
  { value: "tab3", label: "Closed Tenders" },
  { value: "tab4", label: "archieve" },
];

const MarketplaceSections = () => {
  return <MasterTabList tabs={tabs} />;
};

export default MarketplaceSections;
