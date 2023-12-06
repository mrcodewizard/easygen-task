import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes } from "../interfaces/Routes";

export const publicRoutes: Routes[] = [
   {
     path: "/login",
     element: Login
   },
   {
     path: "/register",
     element: Register
   }
];
