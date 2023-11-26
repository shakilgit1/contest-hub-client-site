import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Homepage/Home/Home";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import SignUp from "../Pages/Register/SignUp";
import Login from "../Pages/LoginPage/Login";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/ContestDetailsPage/ContestDetails";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/allContest",
          element: <AllContest></AllContest>
        },
        {
          path: "/contest/:id",
          loader: ({params}) => fetch(`http://localhost:5000/contest/${params.id}`),
          element: <PrivetRoutes><ContestDetails></ContestDetails></PrivetRoutes>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;