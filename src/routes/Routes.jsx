import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/ClientPages/Home/Home";
import About from "../pages/ClientPages/About/About";
import AdminLayout from "../AdminLayout/AdminLayout";
import AdminHome from "../pages/AdminPages/AdminHome/ADminHome";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: 'about',
                element : <About></About>
            }
        ]
    },
    {
        path : "/admin",
        element : <AdminLayout></AdminLayout>,
        children : [
            {
                path: 'home',
                element : <AdminHome></AdminHome>
            },
        ]
    }
])