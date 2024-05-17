import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl">
        <div className="py-8 px-16 bg-slate-200 rounded-lg shadow-md">
          <h1 className="text-2xl text-center font-semibold my-7">Profile</h1>
          <div>
            <label>Email: </label>
            <input
              type="email"
              placeholder={currentUser.email}
              className="border p-3 rounded-lg"
              id="email"
            ></input>
          </div>
          <div>
            <label>Username: </label>
            <input
              type="text"
              placeholder={currentUser.username}
              className="border p-3 rounded-lg"
              id="username"
            ></input>
          </div>
          <div className="flex gap-2 mt-5">
            <Link to={"/sign-up"}>
              <span className="text-blue-700">Sign out</span>
            </Link>
          </div>
          {/* <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border p-3 rounded-lg"
              id="username"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            ></input>
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              {loading ? "Loading...." : "Sign In"}
            </button>
          </form> */}
          {/* <div className="flex gap-2 mt-5">
            <p>Don't have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-700">Sign up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>} */}
        </div>
      </div>
    </div>
  );
};
