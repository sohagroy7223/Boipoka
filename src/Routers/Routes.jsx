import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
  },
]);
