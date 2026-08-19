import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";

export const Auth = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/" replace />;
};
