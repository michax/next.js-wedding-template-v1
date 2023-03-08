import React from "react";
import { Footer } from "../../App/Footer/Footer";
import { NavbarLandingPage } from "../../NavBars/NavbarLandingPage/NavbarLandingPage";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavbarLandingPage />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
