import React from "react";
import PropTypes from "prop-types";

const TextAreaInput = ({
  htmlFor,
  label,
  id,
  name,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        rows="2"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

TextAreaInput.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.string,
  onBlur: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextAreaInput;
