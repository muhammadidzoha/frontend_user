import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Dropdown = ({ titleButton, children, style, options }) => {
  return (
    <div className={`hs-dropdown relative inline-flex ${options}`}>
      <button
        id="hs-dropdown-hover-event"
        type="button"
        aria-current="true"
        className={clsx(
          `hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-text shadow-sm ${style} disabled:opacity-50 disabled:pointer-events-none border border-gray-200`
        )}
      >
        {titleButton}
        <svg
          className="hs-dropdown-open:rotate-180 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        aria-labelledby="hs-dropdown-hover-event"
      >
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  titleButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  options: PropTypes.string,
};

export default Dropdown;
