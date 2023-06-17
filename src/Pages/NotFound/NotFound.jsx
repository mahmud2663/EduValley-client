import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/lf30_cf9m7dnx (1).json";

const NotFound = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "1rem",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyles}>
      <div style={{ maxWidth: "80%" }}>
        <Lottie
          options={lottieOptions}
          height={"80%"}
          width={"80%"}
        />
      </div>
      <div className="mt-4">
        <Link
          to="/"
          className="text-amber-500  border-b-4 rounded-full text-xl font-semibold border-gray-950 px-5 py-3"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


