import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = ({ mainPath, currentRoute }) => {
  return (
    <ol
      className="flex items-center whitespace-nowrap font-light"
      aria-label="Breadcrumb"
    >
      <li className="inline-flex items-center">
        <a
          className="flex items-center text-sm text-text hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="/"
        >
          Beranda
        </a>
        <svg
          className="flex-shrink-0 h-5 w-5 text-gray-400 mx-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </li>
      <li className="inline-flex items-center" aria-current="page">
        <span className="flex items-center text-sm capitalize text-text hover:text-blue-600 focus:outline-none focus:text-blue-600">
          {mainPath}
          <svg
            className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </span>
      </li>
      <li className="inline-flex items-center text-sm text-text truncate ">
        {currentRoute}
      </li>
    </ol>
  );
};

Breadcrumb.propTypes = {
  mainPath: PropTypes.string.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default Breadcrumb;
