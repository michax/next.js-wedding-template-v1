import LayoutDashboard from "../src/components/LayoutDashboard/LayoutDashboard";
import React, { useContext } from "react";
import { DataContext } from "./summary";

const Test = () => {
  const data = useContext(DataContext);

  console.log("context test", data);
  return (
    <LayoutDashboard>
      <p>need to use data from context </p>
    </LayoutDashboard>
  );
};

export default Test;
