import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Register from "../Pages/shared/Register";
import SingIn from "../Pages/shared/SingIn";
import AllArtifacts from "../Pages/AllArtifacts";
import AddArtifacts from "../Pages/AddArtifacts";
import PrivetRoute from "./PrivetRoute";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import ViewDetail from "../Pages/ViewDetail";
import UpdateMyArtifact from "../Pages/UpdateMyArtifact";

import notFound from "../assets/icon/notFound.webp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <img className="w-full h-[100vh]" src={notFound} alt="" />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "allArtifacts/:id",
        element: (
          <PrivetRoute>
            <ViewDetail></ViewDetail>
          </PrivetRoute>
        ),
      },
      {
        path: "addArtifacts",
        element: (
          <PrivetRoute>
            <AddArtifacts></AddArtifacts>
          </PrivetRoute>
        ),
      },

      {
        path: "myArtifacts",
        element: (
          <PrivetRoute>
            <MyArtifacts></MyArtifacts>
          </PrivetRoute>
        ),
      },
      {
        path: "updateMyArtifact/:id",
        element: (
          <PrivetRoute>
            <UpdateMyArtifact></UpdateMyArtifact>
          </PrivetRoute>
        ),
      },
      {
        path: "LikedArtifacts",
        element: (
          <PrivetRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivetRoute>
        ),
      },
      {
        path: "singin",
        element: <SingIn></SingIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
