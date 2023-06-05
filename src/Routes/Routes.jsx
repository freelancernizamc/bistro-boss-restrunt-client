import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageOrders from "../pages/Dashboard/ManageBookings/ManageOrders";
// import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard />,</PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome />
            },
            {
                path: 'mycart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },

            // admin route
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: 'manageorders',
                element: <ManageOrders />
            }
        ]
    }
]);