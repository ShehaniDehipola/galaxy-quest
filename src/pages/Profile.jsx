import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-r from-amber-200 via-blue-300 to-indigo-300">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder={currentUser.email}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder={currentUser.username}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="text-left">
            <Link to="/sign-up">
              <button className="text-blue p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                Sign out
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
