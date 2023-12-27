import React from "react";
import PropTypes from "prop-types";

const Card = ({ href, src, alt, cardTitle, cardDesc, cardDate }) => {
  return (
    <div className="group flex flex-col overflow-hidden lg:overflow-visible h-full border bg-white border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl">
      <div className="aspect-w-16 aspect-h-11">
        <img
          className="w-full object-cover rounded-tr-xl rounded-tl-xl"
          src={src}
          alt={alt}
        />
      </div>
      <div className="my-6 p-5">
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-primary">
          {cardTitle}
        </h3>
        <p className="mt-5 text-gray-600 truncate">{cardDesc}</p>
      </div>
      <div className="mt-auto flex items-center gap-x-3 p-5">
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-lightPrimary text-primary">
          Berita
        </span>
        <p className="text-sm text-gray-600">{cardDate}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  cardDate: PropTypes.string,
};

export default Card;
