import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import AllCampaigns from "../Pages/AllCampaigns";

import MyCampaigns from "../Pages/MyCampaigns";
import MyDonations from "../Pages/MyDonations";
import CampaignDetails from "../Pages/CampaignDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes ";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddNewCampaign from "../Pages/AddNewCampaign";
import UpdateCampaign from "../Components/UpdateCampaign";
import HomePage from "../Pages/HomePage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/all-campaigns", element: <AllCampaigns /> },
        { path: "/", element: <HomePage /> },
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
        {
          path: "/add-new-campaign",
          element: (
            <PrivateRoutes>
              <AddNewCampaign />
            </PrivateRoutes>
          ),
        },
        {
          path: "/details/:id",
          element: (
            <PrivateRoutes>
              <CampaignDetails></CampaignDetails>
            </PrivateRoutes>
          ),
        },
        {
          path: "/update-campaign/:id",
          element: (
            <PrivateRoutes>
              <UpdateCampaign></UpdateCampaign>
            </PrivateRoutes>
          ),
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },

    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
