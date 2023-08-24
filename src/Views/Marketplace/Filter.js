// import React from "react";
// import { Text, Input, Label, makeStyles } from "@fluentui/react-components";
// import { Dropdown, Option, DatePicker } from "@fluentui/react-components"; // Correct these imports as needed

// const useStyles = makeStyles({
//   control: {
//     maxWidth: "300px",
//   },
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "2px",
//     maxWidth: "400px",
//   },
// });

// const TenderFilter = () => {
//   const styles = useStyles();
//   const inputId = useId("input");

//   // Define your dropdown options here
//   const statusOptions = ["All", "Open", "Closed", "Awarded"];
//   const categoriesOptions = [
//     "UNSPSC Category 1",
//     "UNSPSC Category 2",
//     // Add more categories as needed
//   ];

//   const regionsOptions = [
//     "International Region 1",
//     "International Region 2",
//     // Add more regions as needed
//   ];

//   return (
//     <div className={styles.root}>
//       <Text>Advanced Search</Text>
//       <Label htmlFor={inputId}>Keywords in Tender Title:</Label>
//       <Input id={inputId} placeholder="Enter keywords..." />
//       <Label htmlFor={inputId}>Reference #:</Label>
//       <Input id={inputId} placeholder="Enter reference..." />
//       <Label htmlFor={inputId}>GETS RFx ID:</Label>
//       <Input id={inputId} placeholder="Enter RFx ID..." />
//       <Label htmlFor={inputId}>Organisation Name:</Label>
//       <Input id={inputId} placeholder="Enter organisation name..." />
//       <Label htmlFor={inputId}>Procurement Officer:</Label>
//       <Input id={inputId} placeholder="Enter officer's name..." />
//       <Label htmlFor={inputId}>Keywords in Tender Overview:</Label>
//       <Input id={inputId} placeholder="Enter keywords..." />
//       <DatePicker
//         className={styles.control}
//         placeholder="Open Date Between..."
//       />
//       <DatePicker
//         className={styles.control}
//         placeholder="Closed Date Between..."
//       />
//       <DatePicker
//         className={styles.control}
//         placeholder="Awarded Date Between..."
//       />
//       <label>Status:</label>
//       <Dropdown placeholder="Select Status">
//         {statusOptions.map((option) => (
//           <Option key={option}>{option}</Option>
//         ))}
//       </Dropdown>
//       <label>
//         Categories: The United Nations Standard Products and Services Code
//         (UNSPSC)
//       </label>
//       <Dropdown placeholder="Select Categories">
//         {categoriesOptions.map((option) => (
//           <Option key={option}>{option}</Option>
//         ))}
//       </Dropdown>
//       <label>Regions: International</label>
//       <Dropdown placeholder="Select Regions">
//         {regionsOptions.map((option) => (
//           <Option key={option}>{option}</Option>
//         ))}
//       </Dropdown>
//     </div>
//   );
// };

// export default TenderFilter;
