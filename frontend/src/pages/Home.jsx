import React from "react";
import { Link } from "react-router-dom";
import { FlippingCard } from "../components/FlippingCard";
import solar_image from "../assets/images/solar_image.webp";
import apodImage from "../assets/images/apod.jpg";
import earthImage from "../assets/images/earth.webp";
import marsImage from "../assets/images/mars.jpg";

export const Home = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${solar_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-3 gap-20">
        <Link to="/apod">
          <FlippingCard
            className="h-full w-full object-cover text-center"
            backContent="Astronomy Picture of the Day"
          />
        </Link>
        <Link to="/epic-img">
          <FlippingCard
            className="h-full w-full object-cover text-center"
            backContent="Earth Polychromatic Imaging Camera"
          />
        </Link>
        <Link to="/mars-photos">
          <FlippingCard
            className="h-full w-full object-cover text-center"
            backContent="Mars Rover Photos"
          />
        </Link>
      </div>
    </div>
  );
};
