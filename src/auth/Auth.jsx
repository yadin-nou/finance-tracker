import React from "react";
import { Navigate } from "react-router-dom";

export const Auth = ({ children }) => {
  const isLoggin = true;
  return isLoggin ? children : <Navigate to="/" replace />;
};
