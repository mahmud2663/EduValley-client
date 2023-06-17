import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../Component/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/allInstructor`)
      .then((response) => response.json())
      .then((data) =>
        setInstructors(data.filter((ins) => ins.role === "Instructor"))
      )
      .catch((error) => console.error(error));
  }, [id]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="lg:my-24 mx-auto container">
      <SectionTitle heading="Instructors" subHeading="*****" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mb-5 gap-8 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {instructors.map((instructor) => (
          <motion.div
            key={instructor.id} 
            className="w-full bg-slate-600 p-6 sm:p-10 lg:m-4 sm:mx-8  border-4 space-y-5 rounded-lg border-amber-400 text-center"
            variants={itemVariants}
          >
            <motion.img
              src={instructor.image}
              className="w-60 h-60 mb-4 rounded-full mx-auto"
              alt={instructor.instructor}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-lg font-semibold text-white mb-2">
              {instructor.name}
            </h3>
            <p className="text-lg font-semibold text-white mb-2">
              Email: {instructor.email}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Instructor;


