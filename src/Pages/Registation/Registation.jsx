import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Zoom from "react-reveal/Zoom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignIn = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photoURL = data.photoURL;

    try {
      const result = await createUser(email, password,photoURL);
      const loggedUser = result.user;
      console.log(loggedUser);
      await updateUserProfile(name, photoURL);
      const saveUser = {
        name: name,
        email: email,
        image: photoURL,
        role: "Student" // Add the image field
      };
      
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/", { replace: true });
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            history.push("/"); // Redirect to home page
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center my-24">
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
      <Zoom>
        <div className="py-14 px-24">
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="lg:flex justify-center space-x-12">
              <div className="space-y-5">
                <h1 className="text-2xl rounded-r-full text-slate-100 px-5 py-3 mb-5 rounded-e-xl rounded-b-full bg-amber-500 font-semibold">
                  General Information
                </h1>
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="w-full px-3 py-2 border-b-2 border-amber-500 rounded"
                  />
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    })}
                    placeholder="Email"
                    className="w-full px-3 py-2 border-b-2 border-amber-500 rounded"
                  />
                  {errors.email && (
                    <span>
                      This field is required and must be a valid email
                    </span>
                  )}
                </div>
                <div>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/i,
                    })}
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border-b-2 border-amber-500 rounded"
                  />
                  {errors.password && (
                    <span>
                      Password must be at least 6 characters long, contain a
                      capital letter, and a special character
                    </span>
                  )}
                </div>

                <div>
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === watch("password"),
                    })}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border-b-2 border-amber-500 rounded"
                  />
                  {errors.confirmPassword && <span>Passwords must match</span>}
                </div>
                <div className="space-y-5">
                  <div>
                    <h1 className="text-2xl rounded-r-full text-slate-100 px-5 py-3 mb-5 rounded-e-xl rounded-b-full bg-amber-500 font-semibold">
                      Additional Information
                    </h1>
                  </div>
                  <div>
                    <input
                      {...register("photoURL")}
                      placeholder="Photo URL"
                      className="w-full px-3 py-2 border-b-2 border-amber-500 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <input
              type="submit"
              className="w-full bg-slate-500 text-xl mt-8 text-white py-2 px-4 rounded-full hover:bg-slate-600 transition duration-200"
              value="Register"
            />
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="hover:underline">
              <span className="text-slate-700">Already have an account?</span>{" "}
              <span className="text-amber-600">Login</span>
            </Link>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Registration;
