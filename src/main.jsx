import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import ErrorPage from './error-page';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/Projects',
      element: <Projects />,

    },
    {
      path: '/Contact',
      element: <Contact />
    },
    {
      path: '/Projects/:id',
      element: <ProjectDetails />
    }
  ],
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);