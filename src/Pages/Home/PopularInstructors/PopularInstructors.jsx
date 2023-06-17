import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};
`;

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/popularInstructor")
      .then((response) => response.json())
      .then((data) => {
        // Sort instructors based on the number of students in descending order
        const sortedInstructors = data.sort(
          (a, b) => b.instructorCount - a.instructorCount
        );
        // Get the top 6 instructors
        const topInstructors = sortedInstructors.slice(0, 6);
        setPopularInstructors(topInstructors);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="my-24 container mx-auto">
      <SectionTitle
        subHeading="Discover our popular instructors!"
        heading="Popular Instructors"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 space-y-8 gap-4 justify-center items-center">
        {popularInstructors.map((instructor, index) => (
          <FadeInUpDiv key={index} className="rounded-full text-center">
            <motion.img
              className="w-60 h-60 rounded-full mb-4 mx-auto"
              src={instructor.image}
              alt={instructor.instructor}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 3, y: 0 }}
              transition={{ duration: 12 }}
            />
            <h2 className="text-xl font-bold mb-2">{instructor.name}</h2>
            <p className="text-gray-600">{` ${instructor.email}`}</p>
          </FadeInUpDiv>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;

