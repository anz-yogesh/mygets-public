// src/Components/TenderBreadcrumb.js
import React from "react";
import MasterBreadcrumb from "../../Components/Breadcrumb/MasterBreadcrumb";

const TenderBreadcrumb = ({ clientOrganisation, tenderName }) => {
  
  const breadcrumbItems = [
    { value: "Marketplace", isLastItem: false },
    { value: clientOrganisation, isLastItem: false },
    { value: tenderName, isLastItem: true },
  ];

  return <MasterBreadcrumb breadcrumbItems={breadcrumbItems} />;
};

export default TenderBreadcrumb;
