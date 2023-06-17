import React from "react";
import { Zoom } from "react-reveal";
import img1 from "../../../assets/logo/logo.png";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const AboutUS = () => {
  return (
    <div>
      <SectionTitle 
        subHeading={""}
        heading={"About Edu_Valley - Online Programming Courses"}
      />
      <div className="mx-auto container my-24 lg:flex justify-around items-center">
      
      <Zoom>
        <img className="h-96 mb-12 lg:mb-0 sm:items-center mx-auto" src={img1} alt="" />
      </Zoom>

      <div className="lg:w-1/2">
        <Zoom>
         
          <p className="text-lg px-5">
            At Edu_Valley, we believe in the power of programming languages to connect people across the digital world. Programming languages serve as a gateway to innovative technologies, problem-solving skills, and career opportunities in the digital age. They enable us to create, automate, and build solutions that shape the future.
            Our mission is to provide high-quality online programming courses and resources that empower learners at all levels. Whether you're a beginner taking your first steps into the world of coding or an experienced developer looking to expand your skills, Edu_Valley offers a diverse range of courses designed to meet your learning goals.
            Join our community of learners, enthusiasts, and experts as we embark on an exciting journey of exploration and growth. Together, let's dive into the realm of programming, unlock new possibilities, and shape the digital landscape.
            Welcome to Edu_Valley, where learning knows no boundaries and programming speaks a universal language.
          </p>
        </Zoom>
      </div>
    </div>
    </div>
  );
};

export default AboutUS;


