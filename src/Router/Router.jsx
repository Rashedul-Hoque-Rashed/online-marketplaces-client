import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJobs from "../Pages/AddJobs/AddJobs";
import PrivateRouter from "./PrivateRouter";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/add-jobs",
          element: <PrivateRouter><AddJobs/></PrivateRouter>
        }
      ]
    },
  ]);