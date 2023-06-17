import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../Hook/useCart";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";

const Classes = ({ classCart }) => {
  const { name, image, availableSeats, price, instructor, _id } = classCart;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAddToCart = (id) => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      
      if (user && user.email) {
        const cartItem = {
          menuItemId: id,
          name,
          image,
          price,
          email: user.email,
        };
        fetch("http://localhost:5000/addCarts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added to the cart.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            setIsButtonDisabled(false); // Enable the button if an error occurs
          });
      } else {
        Swal.fire({
          title: "Please login to order the Class",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login now!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { state: { from: location } });
          } else {
            setIsButtonDisabled(false); // Enable the button if the user cancels
          }
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-full p-6 sm:p-10 lg:m-4 border-4 border-amber-400 text-center rounded-xl ${
        availableSeats === 0 ? "bg-red-100" : "bg-gray-700"
      } space-y-4`}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        src={image}
        className="w-full h-48 mb-4"
        alt={name}
      />
      <motion.h3
        initial={{ fontSize: 20 }}
        animate={{ fontSize: 24 }}
        transition={{ duration: 0.5 }}
        className={`text-2xl font-bold ${
          availableSeats === 0 ? "text-gray-800" : "text-white"
        }`}
      >
        {name}
      </motion.h3>
      <motion.p
        initial={{ fontSize: 14 }}
        animate={{ fontSize: 16 }}
        transition={{ duration: 0.5 }}
        className={`text-lg font-bold ${
          availableSeats === 0 ? "text-gray-800" : "text-white"
        } mb-2`}
      >
        Instructor: {instructor}
      </motion.p>
      <motion.p
        initial={{ fontSize: 14 }}
        animate={{ fontSize: 16 }}
        transition={{ duration: 0.5 }}
        className={`text-lg font-bold ${
          availableSeats === 0 ? "text-gray-800" : "text-white"
        } mb-2`}
      >
        Available Seats: {availableSeats}
      </motion.p>
      <motion.p
        initial={{ fontSize: 14 }}
        animate={{ fontSize: 16 }}
        transition={{ duration: 0.5 }}
        className={`text-lg font-bold ${
          availableSeats === 0 ? "text-gray-800" : "text-white"
        } mb-4`}
      >
        Price: ${price}
      </motion.p>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        type="button"
        className="bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-600 transition duration-200"
        onClick={() => handleAddToCart(_id)}
        disabled={availableSeats === 0 || isButtonDisabled}
      >
        {isButtonDisabled ? "Selected" : "Select"}
      </motion.button>
    </motion.div>
  );
};

export default Classes;


