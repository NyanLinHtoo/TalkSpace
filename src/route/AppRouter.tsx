import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import ErrorPage from "../ErrorPageHandler/ErrorPage";
import Dashboard from "../Pages/Dashboard";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
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
