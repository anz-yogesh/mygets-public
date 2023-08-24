// import React from "react";
// import AppHeaderBar from "./Components/AppHeader/AppHeader";

// import Login from "./Views/Login/Login";
// import { Marketplace } from "./Views/Marketplace/Marketplace";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import SignUp from "./Views/SignUp/SignUp";
// import EditProfile from "./Views/EditProfile/EditProfile";
// import Main from "./Views/main/Main";
// import TenderQueries from "./Views/TenderQueries/TenderQueries";
// import Content from "./Components/Content/Content";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/signUp",
//       element: <SignUp />,
//     },
//     {
//       path: "/",
//       element: <Main />,
//       children: [
//         // {
//         //   path: "/",
//         //   element: <Dashboard />,
//         // },
//         {
//           path: "marketplace",
//           element: <Marketplace />,
//         },
//         {
//           path: "editProfile",
//           element: <EditProfile />,
//         },
//         {
//           path: "tenderqueries",
//           element: <TenderQueries />,
//         },
//       ],
//     },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader.js";
import Content from "./Components/Content/Content.js";
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
} from "@fluentui/react-components";

const App = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="appContainer">
        <AppHeader />
        <Content />
      </div>
    </FluentProvider>
  );
};

export default App;
