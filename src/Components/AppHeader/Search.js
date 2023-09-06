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
        
      />
    </div>
  );
};

