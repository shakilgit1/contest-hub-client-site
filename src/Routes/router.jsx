import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Homepage/Home/Home";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import SignUp from "../Pages/Register/SignUp";
import Login from "../Pages/LoginPage/Login";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Pages/ContestDetailsPage/ContestDetails";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyProfile from "../Pages/Dashboard/User/MyProfile";
import AdminRoute from "../PrivetRoutes/AdminRoute";

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
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        }
      ]
    }
  ]);

export default router;