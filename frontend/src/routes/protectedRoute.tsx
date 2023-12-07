import { Route, Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "../utils/helpers/jwtHelpers";
import { Routes } from "../interfaces/Routes";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";


export const protectedRoute: Routes[] = [
   {  
      path: "/",
      element: <Home />,
    },
   {
      path: "/dashboard",
      element: <Dashboard />
   }
];

const ProtectedRoute = ({ children }: any) => {
  const isToken = isTokenValid();
  if(!isToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />
}

export default ProtectedRoute