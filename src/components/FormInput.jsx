import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
  htmtFor,
  type,
  id,
  name,
  onChange,
  onBlur,
  label,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={htmtFor} className="block text-sm mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder={placeholder}
          aria-describedby="username-error"
        />
        <div className="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3">
          <svg
            className="h-5 w-5 text-red-500"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
      <p className="hidden text-xs text-red-600 mt-2" id="email-error">
        Please include a valid email address so we can get back to you
      </p>
    </div>
  );
};

FormInput.propTypes = {
  htmtFor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.string,
  onBlur: PropTypes.string,
};

export default FormInput;
