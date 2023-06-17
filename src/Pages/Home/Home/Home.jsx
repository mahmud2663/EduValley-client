import React from "react";
import Banner from "../Banner/Banner";
import Teachers from "../Teachers/Teachers";
import Service from "../Service/Service";
import Lang from "../lang/Lang";
import icon from "../../../assets/logo/logo.png";

import AboutUS from "../AboutUS/AboutUS";
import ExtraSec from "../ExtraSec/ExtraSec";
import { useEffect } from "react";
import { useState } from "react";
import OverCard from "../OverCard/OverCard";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <img
            src={icon}
            alt="Loading Icon"
            className="animate-spin h-24 w-24 text-white"
          />
        </div>
      ) : (
        <>
          <Banner />
          <OverCard></OverCard>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <ExtraSec />
          <Teachers />
          <Lang />
          <AboutUS />
          <Service />
        </>
      )}
    </div>
  );
};

export default Home;
