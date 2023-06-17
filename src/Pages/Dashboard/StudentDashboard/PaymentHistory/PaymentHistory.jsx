import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../../../Component/SectionTitle/SectionTitle';
import { AuthContext } from '../../../../providers/AuthProvider';
import { motion } from 'framer-motion';

const PaymentHistory = () => {
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

  const renderPaymentHistory = () => {
    const sortedPayments = enrolledClasses.sort((a, b) => new Date(b.date) - new Date(a.date));

    return sortedPayments.map((payment) => (
      <motion.tr
        key={payment.id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hover:bg-gray-100"
      >
        <td className="py-2 px-4 border-b text-center">{payment.itemNames}</td>
        <td className="py-2 px-4 border-b text-center">${payment.price}</td>
        <td className="py-2 px-4 border-b text-center">{payment.date}</td>
      </motion.tr>
    ));
  };

  return (
    <div className="container mx-auto p-8">
      <SectionTitle subHeading="-------" heading="Payment History" />
      <motion.table
        className="min-w-full bg-white border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Class Name</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <motion.tbody>{renderPaymentHistory()}</motion.tbody>
      </motion.table>
    </div>
  );
};

export default PaymentHistory;




