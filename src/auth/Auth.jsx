import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/userContext";

export const Auth = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/" replace />;
};
