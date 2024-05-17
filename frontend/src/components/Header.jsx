import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-zinc-950 shadow-md py-4 px-4 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        <Link to="/home">
          <h1 className="font-bold text-m sm:text-3xl flex flex-wrap ml-5">
            <span className="text-amber-200">Galaxy</span>
            <span className="text-sky-300">Quest</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/profile">
            {currentUser ? (
              <li className="sm: inline text-slate-400 hover:underline mr-5">
                {currentUser.username}
              </li>
            ) : (
              <li className="sm:inline text-slate-700 hover:bg-slate-500 mr-5 bg-slate-300 px-4 py-2 rounded-md font-medium text-center">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
