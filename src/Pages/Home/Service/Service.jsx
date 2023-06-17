import React from "react";
import { FaClock, FaEnvelope, FaCreditCard, FaMobileAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Card = ({ color, title, icon, description }) => {
  const IconComponent = icon;
  return (
    <Tilt tiltMaxAngleX={55} tiltMaxAngleY={55} transitionSpeed={2500}>
      <div
        className={`flex flex-col bg-${color}-500 text-white p-4 rounded-none shadow-lg text-center`}
      >
        <div className="flex items-center justify-center mb-4">
          <IconComponent className="text-4xl" />
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Tilt>
  );
};

const Service = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"24 Hours Service"}
        heading={"Our Service"}
      ></SectionTitle>
      <div className="flex flex-wrap justify-center container mx-auto gap-0  mb-24">
        <div className="w-full md:w-1/2 lg:w-1/4  ">
          <Card
            color="amber" // Set color to gray
            title="24 Hours Service"
            icon={FaClock}
            description="We are available 24/7 to assist you."
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 bg-gray-600">
          <Card
            title="Online Help"
            icon={FaEnvelope}
            description="Get instant online help and support."
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <Card
            color="amber"
            title="Online Payment"
            icon={FaCreditCard}
            description="Make secure online payments."
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 bg-gray-600">
          <Card
            title="Call 01794541631"
            icon={FaMobileAlt}
            description="Contact us for assistance."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
