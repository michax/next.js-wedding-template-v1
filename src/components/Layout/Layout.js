import React from "react";
import { Footer } from "../Footer/Footer";
import { NavbarLandingPage } from "../NavbarLandingPage/NavbarLandingPage";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavbarLandingPage />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
