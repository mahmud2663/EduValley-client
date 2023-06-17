import React, { useState, useEffect, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      myClasses();
    }
  }, [user]);

  const myClasses = () => {
    fetch(`http://localhost:5000/myClass?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error("Error fetching classes data:", error);
      });
  };

  const handlePay = (classItem) => {
    history.push(`/payment?classId=${classItem.id}`);
  };

  const renderFeedback = (classItem) => {
    if (classItem.status === "denied") {
      return <p>{classItem.feedback}</p>;
    }
    return null;
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <SectionTitle subHeading="-------" heading="MY Class" />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sl No</th>
            <th className="py-2 px-4 border-b">Class Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Total Enrolled Students</th>
            <th className="py-2 px-4 border-b">Seats</th>
            <th className="py-2 px-4 border-b">Feedback</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem, index) => (
            <tr key={classItem.insEmail}>
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center">
                {classItem.name}
              </td>
              <td
                className={`py-2 px-4 border-b text-center ${
                  classItem.status === "approved"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {classItem.status}
              </td>
              <td className="py-2 px-4 border-b text-center">
                ${classItem.price}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {classItem.enrolledStudents}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {classItem.seats}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {renderFeedback(classItem)}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {classItem.status === "denied" ? (
                  <MdFeedback className="text-green-500 cursor-pointer" />
                ) : (
                  <button
                    onClick={() => handlePay(classItem)}
                    className="text-gray-500"
                  >
                    Pay
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;

