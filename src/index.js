import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Features from './pages/Features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "aboutus",
    element: <Aboutus/>,
  },
  {
    path: "features",
    element: <Features/>,
  },
  {
    path: "contactus",
    element: <Contactus/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);

