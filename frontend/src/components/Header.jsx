import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-blue-200 shadow-md py-4 px-8">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ml-5">
            <span className="text-sky-900">Galaxy</span>
            <span className="text-slate-700">Quest</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/profile">
            {currentUser ? (
              <li className="sm: inline text-slate-700 hover:underline mr-5">
                {currentUser.username}
              </li>
            ) : (
              <li className="sm:inline text-slate-700 hover:underline mr-5">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
