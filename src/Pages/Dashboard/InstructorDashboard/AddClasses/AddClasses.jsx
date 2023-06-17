import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../providers/AuthProvider";

const AddClasses = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState(null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false); // New state variable
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const instructorData = JSON.parse(
      localStorage.getItem("loggedInInstructor")
    );
    setUsers(instructorData);
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/addClass", data);
      console.log(response.data);
      setIsSubmitSuccessful(true); // Set isSubmitSuccessful to true upon successful submission
      resetFields(); // Reset form fields
      // Navigate to "/classes" route after successful form submission
      history.push("/classes");
    } catch (error) {
      console.error(error);
    }
  };

  const resetFields = () => {
    reset({
      name: "",
      instructor: user?.displayName,
      image: "",
      insEmail: user?.email,
      availableSeats: "",
      price: "",
      seats: "",
      student: "",
    });
  };

  return (
    <div className="lg:p-36 container mx-auto sm:px-8">
      <SectionTitle subHeading="-------" heading="Add a Class" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="className" className="block mb-2 font-bold">
            Class name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500">Class name is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">Instructor Name</label>
          <input
            type="text"
            id="instructor"
            value={user?.displayName}
            {...register("instructor", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.instructor && (
            <p className="text-red-500">Instructor name is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">Image</label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.image && <p className="text-red-500">Image is required</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">Instructor Email</label>
          <input
            type="text"
            id="insEmail"
            value={user?.email}
            {...register("insEmail", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2 font-bold">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register("availableSeats", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.availableSeats && (
            <p className="text-red-500">Available seats is required</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.price && <p className="text-red-500">Price is required</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="seats" className="block mb-2 font-bold">
            Seats
          </label>
          <input
            type="number"
            id="seats"
            {...register("seats", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.seats && <p className="text-red-500">Seats is required</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="student" className="block mb-2 font-bold">
            Student
          </label>
          <input
            type="number"
            id="student"
            {...register("student", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClasses;
