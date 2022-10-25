import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Course from "../pages/Course/Course";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/forms/Login";
import Register from "../pages/forms/Register";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/course',
                    element: <Course></Course>
               },
               {
                    path: '/faq',
                    element: <Faq></Faq>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/register',
                    element: <Register></Register>
               }
          ]
     },
     {
          path: '*',
          element: <NotFound></NotFound>
     }
])