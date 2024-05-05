import React, { useState } from "react";
import classNames from "classnames";

export const FlippingCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={classNames(
        "relative w-64 h-40 cursor-pointer transform-style-preserve border-white",
        {
          "rotate-y-180": flipped,
        }
      )}
      onClick={handleFlip}
    >
      <div className="absolute inset-0 bg-sky-700 rounded-lg shadow-md flex justify-center items-center text-center">
        {frontContent}
      </div>
      <div className="absolute inset-0 bg-sky-900 rounded-lg shadow-md flex justify-center items-center backface-hidden  text-center text-white font-bold">
        {backContent}
      </div>
    </div>
  );
};
