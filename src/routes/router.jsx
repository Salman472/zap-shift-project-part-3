import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home/Home";
import Coverage from "../pages/coverage/Coverage";
import Story from "../pages/aboutUs/AboutUs/Story";
import Mission from "../pages/aboutUs/AboutUs/Mission";
import Success from "../pages/aboutUs/AboutUs/Success";
import Team from "../pages/aboutUs/AboutUs/Team";
import AboutLayout from "../layout/AboutLayout";
import PageNotFound from "../components/error/PageNotFound";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";

export const router = createBrowserRouter([
  // root layout
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'coverage',
          Component:Coverage,
          loader: ()=>fetch("/utilits/serviceCenters.json").then(res=>res.json())
        },
        {
          path:'send-parcel',
          element:<PrivateRoute><SendParcel/></PrivateRoute>,
          loader: ()=>fetch("/utilits/serviceCenters.json").then(res=>res.json())
        },
        {
          path:'/about-us',
          Component:AboutLayout,
          children:[
            {
              index:true,
              
              Component:Story
            },
            {
              
              path:'/about-us/story',
              Component:Story
            },
            {
              path:'/about-us/mission',
              Component:Mission
            },
            {
              path:'/about-us/success',
              Component:Success
            },
            {
              path:'/about-us/team-and-others',
              Component:Team
            },
          ]
        },
        {
          path:'rider',
          element:<PrivateRoute><Rider/></PrivateRoute>
        },
        {
          path:'/*',
          Component:PageNotFound
        }

    ]
  },
  // auth layout
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
  }
]);