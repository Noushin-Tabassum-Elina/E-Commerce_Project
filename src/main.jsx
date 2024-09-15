/* eslint-disable no-unused-vars */
 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Error from './components/ErrorPage/Error.jsx';
import Home from './components/Home/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/contact",
//     element: <Contact/>
//   },
//   {
//     path:"/about",
//     element: <About/>
//   },
//   {
//     path: "*",
//     element: <Error/>
//   }
// ]);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
