import React from "react";
import { Link } from "react-router-dom";
import { FlippingCard } from "../components/FlippingCard";
import solar_image from "../assets/images/solar_image.webp";
import galaxy_image_two_new from "../assets/images/galaxy_image_two_new.jpg";
import apodImage from "../assets/images/apod.jpg";
import earthImage from "../assets/images/earth.webp";
import marsImage from "../assets/images/mars.jpg";

export const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen overflow-y-hidden"
      style={{
        backgroundImage: `url(${galaxy_image_two_new})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-40">
        <h1 className="text-5xl font-bold text-white mb-4">
          Explore the Universe with Galaxy Quest
        </h1>
        <h2 className="text-3xl font-bold text-white">
          Navigate NASA's Universe at Your Fingertips
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-20">
        <Link to="/apod">
          <FlippingCard
            // frontContent={
            //   <img
            //     src={apodImage}
            //     alt="Astronomy Picture of the Day"
            //     className="h-full w-full object-cover rounded-lg"
            //   />
            // }
            frontContent="Astronomy Picture of the Day"
          />
        </Link>
        <Link to="/epic-img">
          <FlippingCard
            // frontContent={
            //   <img
            //     src={earthImage}
            //     alt="Earth Polychromatic Imaging Camera"
            //     className="h-full w-full object-cover rounded-lg"
            //   />
            // }
            frontContent="Earth Polychromatic Imaging Camera"
          />
        </Link>
        <Link to="/mars-photos">
          <FlippingCard
            // frontContent={
            //   <img
            //     src={marsImage}
            //     alt="Mars Rover Photos"
            //     className="h-full w-full object-cover rounded-lg"
            //   />
            // }
            frontContent="Mars Rover Photos"
          />
        </Link>
        <Link to="/mars-info">
          <FlippingCard
            // frontContent={
            //   <img
            //     src={marsImage}
            //     alt="Mars Rover Photos"
            //     className="h-full w-full object-cover rounded-lg"
            //   />
            // }
            frontContent="Mars Weather Info"
          />
        </Link>
      </div>
    </div>
  );
};
