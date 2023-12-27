import React from "react";
import PropTypes from "prop-types";

const CardHorizontal = ({ src, alt, href, cardTitle, cardDesc, cardDate }) => {
  return (
    <div
      className="group sm:flex overflow-hidden lg:overflow-visible hover:shadow-lg transition-all duration-300"
      href={href}
    >
      <div className="flex-shrink-0 relative w-full h-[200px] sm:w-[250px] sm:h-full">
        <img
          className="w-full h-full absolute top-0 start-0 object-cover rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-none md:rounded-bl-xl"
          src={src}
          alt={alt}
        />
      </div>

      <div className="grow bg-white rounded-tr-xl sm:overflow-hidden rounded-br-xl">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <h3 className="text-lg sm:text-2xl font-semibold text-text group-hover:text-primary">
            {cardTitle}
          </h3>
          <p className="mt-2 text-gray-600 truncate">{cardDesc}</p>

          <div className="mt-5 lg:mt-auto flex items-center gap-x-3">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-lightPrimary text-primary">
              Berita
            </span>
            <p className="text-sm text-gray-600">{cardDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardHorizontal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  cardDate: PropTypes.string,
};

export default CardHorizontal;
