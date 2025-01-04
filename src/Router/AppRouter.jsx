import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import AllCampaigns from "../Pages/AllCampaigns";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaigns from "../Pages/MyCampaigns";
import MyDonations from "../Pages/MyDonations";
import CampaignDetails from "../Pages/CampaignDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes ";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/all-campaigns", element: <AllCampaigns /> },
        { path: "/add-new-campaign", element: <AddNewCampaign /> },
        {
          path: "/my-campaigns",
          element: (
            <PrivateRoutes>
              <MyCampaigns />
            </PrivateRoutes>
          ),
        },
        {
          path: "/my-donations",
          element: (
            <PrivateRoutes>
              <MyDonations />
            </PrivateRoutes>
          ),
        },
        { path: "/details/:id", element: <CampaignDetails></CampaignDetails> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },

    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
