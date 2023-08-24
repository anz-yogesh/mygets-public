import React from "react";
import { TabList, Tab } from "@fluentui/react-components";

const MasterTabList = ({ tabs }) => {
  return (
    <div>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index} value={tab.value}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
    </div>
  );
};

export default MasterTabList;
