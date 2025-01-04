import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import AllCampaigns from "../Pages/AllCampaigns";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaigns from "../Pages/MyCampaigns";
import MyDonations from "../Pages/MyDonations";
import Details from "../Pages/CampaignDetails";
import NotFound from "../Pages/ErrorPage";
import HomeLayout from "./Layout/HomeLayout"; // Assuming you have a layout component
import PrivateRoute from "./Components/PrivateRoute"; // Ensure this is the correct path

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
            <PrivateRoute>
              <MyCampaigns />
            </PrivateRoute>
          ),
        },
        {
          path: "/my-donations",
          element: (
            <PrivateRoute>
              <MyDonations />
            </PrivateRoute>
          ),
        },
        { path: "/details/:id", element: <Details /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
