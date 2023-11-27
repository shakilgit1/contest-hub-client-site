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
import MyCreatedContest from "../Pages/Dashboard/Contest Creator/MyCreatedContest";
import AddContest from "../Pages/Dashboard/Contest Creator/AddContest";
import SubmittedContests from "../Pages/Dashboard/Contest Creator/SubmittedContests";
import CreatorRoute from "../PrivetRoutes/CreatorRoute";
import ManageContest from "../Pages/Dashboard/ManageContest/ManageContest";
import MyPerticipatedContest from "../Pages/Dashboard/User/MyPerticipatedContest";
import MyWinningContest from "../Pages/Dashboard/User/MyWinningContest";
import UpdateContest from "../Pages/Dashboard/Contest Creator/UpdateContest";

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
          loader: ({params}) => fetch(`https://contest-hub-server.vercel.app/contest/${params.id}`),
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
        // only admin routes
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageContest',
          element: <AdminRoute><ManageContest></ManageContest></AdminRoute>
        },
        //only creator routes
        {
          path: 'myCreatedContest',
          element: <CreatorRoute><MyCreatedContest></MyCreatedContest></CreatorRoute>
        },
        {
          path: 'addContest',
          element: <CreatorRoute><AddContest></AddContest></CreatorRoute>
        },
        {
          path: 'submittedContest',
          element: <CreatorRoute><SubmittedContests></SubmittedContests></CreatorRoute>
        },
        {
          path: 'updateItem/:id',
          element: <CreatorRoute><UpdateContest></UpdateContest></CreatorRoute>,
          loader: ({params}) => fetch(`https://contest-hub-server.vercel.app/contest/${params.id}`)
        },

        // users routes
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'myWinningContest',
          element: <MyWinningContest></MyWinningContest>
        },
        {
          path: 'myPerticipate',
          element: <MyPerticipatedContest></MyPerticipatedContest>
        }
      ]
    }
  ]);

export default router;