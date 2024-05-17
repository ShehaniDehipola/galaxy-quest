import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import apodImage from "../assets/images/apod.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //check with the middlware
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error(data.message, {
          position: "top-right",
        });
        return;
      }
      //set loading to false when it's completed
      dispatch(signInSuccess(data));
      toast.success("Login successful!", {
        position: "top-right",
      });
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error("Error logging in. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-200 via-blue-300 to-indigo-300">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row bg-slate-200 rounded-lg shadow-md overflow-hidden max-w-4xl">
        <div className="w-full lg:w-1/2 px-8 py-20">
          <h1 className="text-2xl text-center font-semibold mb-7">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border p-3 rounded-lg"
              id="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              {loading ? "Loading...." : "Sign In"}
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Don't have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-700">Sign up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={apodImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
