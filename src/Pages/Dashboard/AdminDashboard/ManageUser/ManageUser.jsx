import React, { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaUserShield, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/manageUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const makeInstructor = (_id) => {
    fetch(`http://localhost:5000/users/${_id}/makeInstructor`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => {
        setUsers((prevUsers) => {
          const updatedUsers = prevUsers.map((user) => {
            if (user._id === _id) {
              return { ...user, role: "Instructor" };
            }
            return user;
          });
          return updatedUsers;
        });
      })
      .catch((error) => console.error(error));
  };

  const makeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/${_id}/makeAdmin`, { method: "PATCH" })
      .then((response) => response.json())
      .then(() => {
        setUsers((prevUsers) => {
          const updatedUsers = prevUsers.map((user) => {
            if (user._id === _id) {
              return { ...user, role: "Admin" };
            }
            return user;
          });
          return updatedUsers;
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <SectionTitle subHeading="-------" heading="Manage Users" />
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-amber-400">
          <thead>
            <tr>
              <th className="py-4 px-4 border-b">Name</th>
              <th className="py-4 px-4 border-b">
                Role <FaUserShield className="inline-block ml-1" />
              </th>
              <th className="py-4 px-4 border-b">
                Email <FaEnvelope className="inline-block ml-1" />
              </th>
              <th className="py-4 px-4 border-b">Make Instructor</th>
              <th className="py-4 px-4 border-b">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr className=" border-b-2" key={user._id}>
                <td className="py-4 px-4 ">
                  <Link to={`/users/${user._id}`} className="text-gray-800 text-lg text-center items-center justify-center">
                    {user.name}
                  </Link>
                </td>
                <td className="py-4 px-4 ">{user.role}</td>
                <td className="py-4 px-4 ">{user.email}</td>
                <td className="py-4 px-4  flex flex-col items-center">
                  <button
                    className="py-2 px-4 bg-blue-500 flex items-center text-white rounded-lg"
                    disabled={
                      user.role === "Instructor" || user.role === "Admin"
                    }
                    onClick={() => makeInstructor(user._id)}
                  >
                    <FaChalkboardTeacher className="mr-1" />
                    <div>Instructor</div>
                  </button>
                </td>
                <td className="py-4 px-4 ">
                  <button
                    className="py-2 px-4 bg-red-500 flex items-center text-white rounded-lg"
                    disabled={user.role === "Admin"}
                    onClick={() => makeAdmin(user._id)}
                  >
                    <FaUserShield className="mr-1" />
                  <div> Admin</div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;





