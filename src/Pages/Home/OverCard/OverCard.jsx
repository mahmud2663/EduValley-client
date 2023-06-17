import React from "react";
import { FaBook, FaUser } from "react-icons/fa";
import img from "../../../assets/banner/over.jpg";

const OverCard = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center items-center text-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 sm:p-10 m-4 border-2 border-amber-500 text-center bg-slate-700 space-y-4 lg:-mt-32">
          <FaBook className="text-7xl text-white mx-auto bg-amber-500 border-8 border-amber-500 lg:-mt-16" />
          <h2 className="text-xl font-bold text-white">Online Resources</h2>
          <p className="text-white">
            Explore a variety of online resources and facilities dedicated to programming languages and their study.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 sm:p-10 m-4 border-2 border-amber-500 text-center bg-cover bg-center bg-no-repeat bg-opacity-50 bg-slate-600" style={{ backgroundImage: `url(${img})` }}>
          <h2 className="text-xl font-bold text-white">Welcome To Edu_Valley</h2>
          <p className="text-white text-3xl font-bold">
            40% off
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-6 sm:p-10 m-4 border-2 border-amber-500 text-center bg-slate-700 space-y-4 lg:-mt-32">
          <FaUser className="text-7xl text-white mx-auto bg-amber-500 border-8 border-amber-500 lg:-mt-16" />
          <h2 className="text-xl font-bold text-white">Learning Made Easy</h2>
          <p className="text-white">
            Learn programming languages from around the world with edu_Valley's user-friendly platform and effective teaching methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverCard;





