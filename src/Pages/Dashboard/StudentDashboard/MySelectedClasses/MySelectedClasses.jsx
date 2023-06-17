import { useState } from "react";
import { FaTrashAlt, FaMoneyBillAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../../Hook/useCart";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";


const MySelectedClasses = () => {
  const [cart, refetch] = useCart();
  
  const handleDeleteClass = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/addCarts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-8">
      <SectionTitle subHeading="-------" heading="MY Selected Class" />
      
      <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-lg font-semibold">
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Class Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Pay</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b text-center">
                  <img
                    src={item.image}
                    alt={item.className}
                    width="80"
                    height="80"
                  />
                </td>
                
                <td className="py-2 px-4 border-b text-center text-lg">{item.name}</td>

                <td className="py-2 px-4 border-b text-center">
                  ${item.price}
                </td>
                <td className="   py-2 px-4 border-b text-center ">
                  <Link to={`/dashboard/studentDashboard/pay/${item._id}`}>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-2 border-b text-center rounded-xl">
                      <FaMoneyBillAlt className="h-5 w-10 text-center" />
                    </button>
                  </Link>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 border-b text-center rounded-xl"
                    onClick={() => handleDeleteClass(item)}
                  >
                    <FaTrashAlt className="h-5 w-5 text-center" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
  );
};

export default MySelectedClasses;
