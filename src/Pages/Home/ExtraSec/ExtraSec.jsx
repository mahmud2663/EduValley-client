import React from "react";
import { Parallax } from "react-parallax";
import { FaUsers, FaBook, FaChalkboardTeacher, FaAward } from "react-icons/fa";
import img from "../../../assets/banner/(13).jpg";

const ExtraSec = () => {
  return (
    <Parallax
      bgImage={img}
      strength={800}
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 5), rgba(0, 0, 0, 5)), url(" + img + ")",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="flex items-center justify-center lg:h-screen lg:py-32">
        <div className="text-white text-center">
          <h1 className="text-2xl lg:text-6xl font-bold mb-4 text-white">
            We are always ahead
          </h1>
          <p className="text-lg lg:text-xl">
            Professional Education for Your Future.
          </p>

          <div className="flex flex-wrap justify-center mt-8">
            <div className="flex flex-col items-center mx-8 mb-8">
              <FaUsers size="3em" className="text-white mb-2" />
              <span className="text-xl lg:text-4xl font-bold">100</span>
              <span className="text-lg lg:text-xl">HAPPY CUSTOMERS</span>
            </div>
            <div className="flex flex-col items-center mx-8 mb-8">
              <FaBook size="3em" className="text-white mb-2" />
              <span className="text-xl lg:text-4xl font-bold">200</span>
              <span className="text-lg lg:text-xl">APPROVED COURSES</span>
            </div>
            <div className="flex flex-col items-center mx-8 mb-8">
              <FaChalkboardTeacher size="3em" className="text-white mb-2" />
              <span className="text-xl lg:text-4xl font-bold">20</span>
              <span className="text-lg lg:text-xl">CERTIFIED TEACHERS</span>
            </div>
            <div className="flex flex-col items-center mx-8 mb-8">
              <FaAward size="3em" className="text-white mb-2" />
              <span className="text-xl lg:text-4xl font-bold">600</span>
              <span className="text-lg lg:text-xl">AWARDS WON</span>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ExtraSec;
