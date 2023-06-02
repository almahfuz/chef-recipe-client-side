import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './assets/components/Main/Main.jsx';
import Home from './assets/components/Home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FooterBar from './assets/components/FooterBar/FooterBar.jsx';
import Blog from './assets/components/Blog/Blog.jsx';
import Login from './assets/components/Login/Login.jsx';
import SignUp from './assets/components/SignUp/SignUp.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
