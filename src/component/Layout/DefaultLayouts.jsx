import React from "react";
import { HeaderLayouts } from "./HeaderLayouts";
import { FooterLayouts } from "./FooterLayouts";
import { Outlet } from "react-router-dom";

export const DefaultLayouts = () => {
  return (
    <div>
      {/* Header  */}
      <HeaderLayouts />
      {/* Body Layout */}
      <Outlet />
      {/* Footer */}
      <FooterLayouts />
    </div>
  );
};
