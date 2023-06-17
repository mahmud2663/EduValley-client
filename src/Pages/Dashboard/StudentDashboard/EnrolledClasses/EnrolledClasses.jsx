import React, { useState, useEffect, useContext } from "react";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../providers/AuthProvider";
import { motion } from "framer-motion";

const EnrolledClasses = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/payments/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClasses(data);
      })
      .catch((error) => {
        console.error("Error fetching enrolled classes:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <SectionTitle subHeading="-------" heading="My Enrolled Classes" />

      <table className="table border-collapse border-2">
        <thead>
          <tr className="text-lg">
            <th>Class Image</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <motion.tbody>
          {enrolledClasses.map((enrolledClass) => (
            <motion.tr
              key={enrolledClass.id}
              initial={{ opacity: 0, l: 20 }}
              animate={{ opacity: 3, y: 0 }}
              transition={{ duration: 1 }}
              className="hover:bg-gray-100"
            >
              <td>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img
                      src={enrolledClass.image}
                      alt="Class Avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{enrolledClass.itemNames}</div>
              </td>
              <td>
                <button className="bg-amber-600 text-white py-2 px-4 rounded-full text-sm">
                  Details
                </button>
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </div>
  );
};

export default EnrolledClasses;

