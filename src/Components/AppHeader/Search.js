import * as React from "react";
import { SearchBox } from "@fluentui/react-search-preview";

export const Search = (props) => {
  return (
    <div className="Search">
      {" "}
      {/* Apply the class here */}
      <SearchBox
        style={{
          maxWidth: "944px",
          width: "100%",
        }}
        placeholder="Look for tenders, users, documents and more!"
        {...props}
      />
    </div>
  );
};

// const argTypes = {
//   placeholder: {
//     description:
//       "Placeholder text for the SearchBox. If using this instead of a label (which is " +
//       "not recommended), be sure to provide an `aria-label` for screen reader users.",
//     type: { name: "string", required: false },
//     table: { type: { summary: "string" } },
//   },
//   disabled: {
//     description: "Whether the SearchBox is disabled",
//     type: { name: "boolean", required: false },
//     table: { type: { summary: "boolean" } },
//   },
//   children: { table: { disable: true } },
//   as: { table: { disable: true } },
// };
