import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h1>hijgjjhukh</h1>
        </div>
    );
};

export default AdminDashboard;

// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";


// const AdminDashboard = () => {
//   const [classes, setClasses] = useState([]);
//   const [users, setUsers] = useState([]);

//   const admin = useSelector((state) => state.auth.user); // Assuming the admin data is stored in the auth state

//   useEffect(() => {
//     // Fetch all classes and users on component mount
//     const fetchClasses = async () => {
//       try {
//         const response = await getAllClasses(); // Fetch all classes from API
//         setClasses(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const response = await getUsers(); // Fetch all users from API
//         setUsers(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchClasses();
//     fetchUsers();
//   }, []);

//   const approveClass = async (classId) => {
//     try {
//       await updateClassStatus(classId, "approved"); // Update class status to "approved" in API
//       // Refresh the classes data or update the specific class status in the state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const denyClass = async (classId) => {
//     try {
//       await updateClassStatus(classId, "denied"); // Update class status to "denied" in API
//       // Refresh the classes data or update the specific class status in the state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const makeInstructor = async (userId) => {
//     try {
//       await updateUserRole(userId, "instructor"); // Update user role to "instructor" in API
//       // Refresh the users data or update the specific user role in the state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const makeAdmin = async (userId) => {
//     try {
//       await updateUserRole(userId, "admin"); // Update user role to "admin" in API
//       // Refresh the users data or update the specific user role in the state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

//       {/* Manage Classes */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Manage Classes</h2>
//         {classes.length > 0 ? (
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Class Name</th>
//                 {/* Add other table headers here */}
//               </tr>
//             </thead>
//             <tbody>
//               {classes.map((classItem) => (
//                 <tr key={classItem.id}>
//                   <td className="px-4 py-2">{classItem.name}</td>
//                   {/* Add other table cells here */}
//                   <td>
//                     {classItem.status === "pending" ? (
//                       <>
//                         <button
//                           onClick={() => approveClass(classItem.id)}
//                           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded mr-2"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => denyClass(classItem.id)}
//                           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
//                         >
//                           Deny
//                         </button>
//                       </>
//                     ) : (
//                       <p>{classItem.status}</p>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No classes found.</p>
//         )}
//       </div>

//       {/* Manage Users */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
//         {users.length > 0 ? (
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">User Name</th>
//                 {/* Add other table headers here */}
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td className="px-4 py-2">{user.name}</td>
//                   {/* Add other table cells here */}
//                   <td>
//                     <button
//                       onClick={() => makeInstructor(user.id)}
//                       disabled={user.role === "instructor"}
//                       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded mr-2"
//                     >
//                       Make Instructor
//                     </button>
//                     <button
//                       onClick={() => makeAdmin(user.id)}
//                       disabled={user.role === "admin"}
//                       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded"
//                     >
//                       Make Admin
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No users found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;