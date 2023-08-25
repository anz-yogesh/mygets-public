import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig.js";
import { Marketplace } from "./Views/Marketplace/Marketplace";
import BuyerDashboard from "./Views/BuyerDashboard/BuyerDashboard";
import SupplierDashboard from "./Views/SupplierDashboard/SupplierDashboard";
import Setting from "./Views/Setting/Setting";
import EditProfile from "./Views/EditProfile/EditProfile";

/**
 * MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
 * For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
) {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
  if (
    (event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS) &&
    event.payload.account
  ) {
    msalInstance.setActiveAccount(event.payload.account);
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "editprofile",
        element: <EditProfile />,
      },
      {
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "buyerdashboard",
        element: <BuyerDashboard />,
      },
      {
        path: "supplierdashboard",
        element: <SupplierDashboard />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
