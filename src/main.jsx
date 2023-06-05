import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Main from "./assets/components/Main/Main.jsx";
import Home from "./assets/components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FooterBar from "./assets/components/FooterBar/FooterBar.jsx";
import Blog from "./assets/components/Blog/Blog.jsx";
import Login from "./assets/components/Login/Login.jsx";
import SignUp from "./assets/components/SignUp/SignUp.jsx";
import AuthProvider from "./assets/components/provider/AuthProvider.jsx";
import ChefBanner from "./assets/components/ChefBanner/ChefBanner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "chefSingleBanner/:id",
        element: <ChefBanner/>,
        loader:({params})=>fetch(`https://chef-server-almahfuz.vercel.app/AllData/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
