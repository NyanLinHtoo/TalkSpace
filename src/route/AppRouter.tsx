import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import ErrorPage from "../ErrorPageHandler/ErrorPage";
import Dashboard from "../Pages/Dashboard";
import CreateMeeting from "../Pages/CreateMeeting";
import OneOnOneMeeting from "../Pages/OneOnOneMeeting";
import VideoConference from "../Pages/VideoConference";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/create",
      element: <CreateMeeting />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/create1on1",
      element: <OneOnOneMeeting />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/videoConference",
      element: <VideoConference />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
