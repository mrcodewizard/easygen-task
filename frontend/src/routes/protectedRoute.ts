import { Routes } from "../interfaces/Routes";
import Home from "../pages/Home";
export const protectedRoute: Routes[] = [
   {  
      path: "/",
      element: Home,
   }
];