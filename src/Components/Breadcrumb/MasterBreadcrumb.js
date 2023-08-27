// src/Components/MasterBreadcrumb.js
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
} from "@fluentui/react-breadcrumb-preview";

const renderBreadcrumbItem = (value, isLastItem) => (
  <React.Fragment key={value}>
    <BreadcrumbItem current={isLastItem}>
      <BreadcrumbButton>{value}</BreadcrumbButton>
    </BreadcrumbItem>
    {!isLastItem && <BreadcrumbDivider />}
  </React.Fragment>
);

const MasterBreadcrumb = ({ breadcrumbItems }) => (
  <Breadcrumb aria-label="Breadcrumb">
    {breadcrumbItems.map((item) =>
      renderBreadcrumbItem(item.value, item.isLastItem)
    )}
  </Breadcrumb>
);

export default MasterBreadcrumb;
