import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
