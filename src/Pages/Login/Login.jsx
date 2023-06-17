import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../assets/lf20_Advb2R.json";
import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/", { replace: true });
        });
    });
  };

  const handleLogIn = handleSubmit(async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      setLoading(true);
      const result = await signIn(email, password); // Assuming you have a signIn function
      const loggedUser = result.user;
      console.log(loggedUser);

      reset();
      setLoading(false);
      showSuccessAlert();
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  });

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Login successful",
      timer: 2000, // Display the alert for 2 seconds
      showConfirmButton: false,
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lg:flex flex-col md:flex-row mx-auto container items-center lg:h-screen">
      <div className="md:ml-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Lottie options={defaultOptions} height={500} width={500} />
        </motion.div>
      </div>
      <div className="md:w-1/3 bg-slate-800 pb-52 p-16 rounded-e-xl rounded-b-full">
        <Tilt>
          <Zoom>
            <form onSubmit={handleLogIn} className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                <div className="absolute right-3 top-2">
                  <FaEye className="cursor-pointer" />
                  <FaEyeSlash className="cursor-pointer hidden" />
                </div>
              </div>
              {errors.password && <span>{errors.password.message}</span>}

              <input
                type="submit"
                className="w-full bg-amber-500 text-xl mt-8 text-white py-2 px-4 rounded-full hover:bg-slate-600 transition duration-200"
                value={loading ? "Logging in..." : "Login"}
                disabled={loading}
              />
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-4"
                  onClick={handleSignInWithGoogle}
                >
                  <FaGoogle className="mr-2" />
                </button>
              </div>
              <div className="text-center text-white">
                Don't have an account?{" "}
                <Link to="/register" className="text-amber-500">
                  Register
                </Link>
              </div>
            </form>
          </Zoom>
        </Tilt>
      </div>
    </div>
  );
};

export default Login;
