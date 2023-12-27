import React from "react";

const index = () => {
  return (
    <div className="flex space-x-5">
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      >
        <a href="../auth/sign-in">Masuk</a>
      </button>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      >
        <a href="../auth/sign-up">Daftar</a>
      </button>
    </div>
  );
};

export default index;
