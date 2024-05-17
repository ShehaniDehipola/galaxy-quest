import React, { useState } from "react";
import classNames from "classnames";

export const FlippingCard = ({ frontContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={classNames(
        "relative w-64 h-40 cursor-pointer transform-style-preserve border-white transition-transform duration-500 hover:scale-100 hover:translate-x-2 hover:translate-y-4",
        {
          "rotate-y-180": flipped,
        }
      )}
      onClick={handleFlip}
    >
      <div className="absolute inset-0 bg-amber-50 rounded-lg shadow-md flex justify-center items-center text-center transition-transform duration-500 bg-opacity-70">
        <div className="opacity-100 transition-opacity duration-300 font-medium text-lg mx-5">
          {frontContent}
        </div>
      </div>
      {/* <div className="opacity-100 hover:opacity-0 transition-opacity duration-300 absolute inset-0 flex justify-center items-center text-center">
        {backContent}
      </div> */}
    </div>
  );
};
