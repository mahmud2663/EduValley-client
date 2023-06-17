import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import Tilt from "react-parallax-tilt";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/popularClass`)
      .then((response) => response.json())
      .then((data) => {
        // Sort classes based on the number of students in descending order
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        // Get the top 6 classes
        const topClasses = sortedClasses.slice(0, 6);
        setPopularClasses(topClasses);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="container mx-auto mt-28">
  <SectionTitle
    subHeading="We look forward to welcoming you to our Edu_Valley classes!"
    heading="Our Popular Classes"
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {popularClasses.map((classItem, index) => (
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={360} transitionSpeed={2500}>
        <div className="card lg:w-full sm:w-auto h-80 text-gray-800 border-x-2 border-amber-500 shadow-xl m-8">
          <figure>
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{classItem.name}</h2>
            <p>{classItem.description}</p>
          </div>
        </div>
      </Tilt>
    ))}
  </div>
</div>

  );
};

export default PopularClasses;







