import { Navigate, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { Routes, PublicRouteProps } from "../interfaces/Routes";
import { isTokenValid } from "../utils/helpers/jwtHelpers";

export const publicRoutes: Routes[] = [
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
];

