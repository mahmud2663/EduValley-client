import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Registation from "../Pages/Registation/Registation";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";
import Instructor from "../Instructor/Instructor";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses/MySelectedClasses";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import AddClasses from "../Pages/Dashboard/InstructorDashboard/AddClasses/AddClasses";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ClassCart from "../Classes/ClassCart/ClassCart";
import Pay from "../Pages/Dashboard/StudentDashboard/PaymentHistory/Pay/Pay";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registation />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/classCart",
        element: <ClassCart></ClassCart>,
      },
      {
        path: "/instructor",
        element: <Instructor />,
      },
    ],
  },
  {
    path: "dashboard/adminDashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageUser",
        element: <ManageUser />,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
  {
    path: "dashboard/instructorDashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "addClasses",
        element: <AddClasses />,
      },
      {
        path: "myClasses",
        element: <MyClasses />,
      },
    ],
  },
  {
    path: "dashboard/studentDashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "enrolledClasses",
        element: <EnrolledClasses />,
      },
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "pay/:id",
        element: <Pay></Pay>
      },
    ],
  },
]);
