import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-red-300 ">
        <p className="text-white text-7xl font-bold">⛔ 404 🤔</p>
        <Link
          to="/"
          className="mt-10 rounded-md bg-red-500 px-4 py-2 text-5xl hover:bg-red-200"
        >
          Back Home
        </Link>
      </div>
    </>
  );
};

export default Error;
