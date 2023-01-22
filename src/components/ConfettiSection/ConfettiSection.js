import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Confetti from "react-confetti";

export const ConfettiSection = ({ isExploding }) => {
  const { width, height } = useWindowSize();
  return <> {isExploding && <Confetti width={width} height={height} />}</>;
};
