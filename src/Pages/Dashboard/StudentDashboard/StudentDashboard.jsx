import React from "react";

const StudentDashboard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const StudentDashboard = () => {
//   const [selectedClasses, setSelectedClasses] = useState([]);
//   const [enrolledClasses, setEnrolledClasses] = useState([]);
//   const [paymentHistory, setPaymentHistory] = useState([]);

//   const student = useSelector((state) => state.auth.user); // Assuming the student data is stored in the auth state

//   useEffect(() => {
//     // Fetch selected classes, enrolled classes, and payment history on component mount
//     const fetchSelectedClasses = async () => {
//       try {
//         const response = await getSelectedClasses(student.id); // Fetch selected classes for the student from API
//         setSelectedClasses(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchEnrolledClasses = async () => {
//       try {
//         const response = await getEnrolledClasses(student.id); // Fetch enrolled classes for the student from API
//         setEnrolledClasses(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchPaymentHistory = async () => {
//       try {
//         const response = await getPaymentHistory(student.id); // Fetch payment history for the student from API
//         setPaymentHistory(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchSelectedClasses();
//     fetchEnrolledClasses();
//     fetchPaymentHistory();
//   }, []);

//   const deleteClass = async (classId) => {
//     try {
//       await deleteSelectedClass(student.id, classId); // Delete selected class for the student in API
//       // Refresh the selected classes data or remove the specific class from the state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const payForClass = async (classId) => {
//     try {
//       await makePayment(student.id, classId); // Make payment for the class in API
//       // Refresh the selected classes data or remove the specific class from the state
//       // Add the class to the enrolled classes data or refresh the enrolled classes data
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>

//       {/* My Selected Classes */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">My Selected Classes</h2>
//         {selectedClasses.length > 0 ? (
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Class Name</th>
//                 {/* Add other table headers here */}
//               </tr>
//             </thead>
//             <tbody>
//               {selectedClasses.map((classItem) => (
//                 <tr key={classItem.id}>
//                   <td className="px-4 py-2">{classItem.name}</td>
//                   {/* Add other table cells here */}
//                   <td>
//                     <button
//                       onClick={() => deleteClass(classItem.id)}
//                       className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
//                     >
//                       Delete
//                     </button>
//                     <button
//                       onClick={() => payForClass(classItem.id)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded ml-2"
//                     >
//                       Pay
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No selected classes found.</p>
//         )}
//       </div>

//       {/* My Enrolled Classes */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">My Enrolled Classes</h2>
//         {enrolledClasses.length > 0 ? (
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Class Name</th>
//                 {/* Add other table headers here */}
//               </tr>
//             </thead>
//             <tbody>
//               {enrolledClasses.map((classItem) => (
//                 <tr key={classItem.id}>
//                   <td className="px-4 py-2">{classItem.name}</td>
//                   {/* Add other table cells here */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No enrolled classes found.</p>
//         )}
//       </div>

//       {/* Payment History */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Payment History</h2>
//         {paymentHistory.length > 0 ? (
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Payment Date</th>
//                 {/* Add other table headers here */}
//               </tr>
//             </thead>
//             <tbody>
//               {paymentHistory.map((payment) => (
//                 <tr key={payment.id}>
//                   <td className="px-4 py-2">{payment.date}</td>
//                   {/* Add other table cells here */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No payment history found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
