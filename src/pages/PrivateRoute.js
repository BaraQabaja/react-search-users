import React from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = user && isAuthenticated;
  return isUser ? children : <Navigate to="/login"></Navigate>;
};
export default PrivateRoute;
