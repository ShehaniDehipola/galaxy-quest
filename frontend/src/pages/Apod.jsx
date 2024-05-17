import React, { useEffect, useState } from "react";
import nasaapiInstance from "../services/NasaApiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    const fetchApod = async () => {
      const date = "2023-10-06"; // Specify the date for which you want to fetch the APOD
      const data = await nasaapiInstance.getAstronomyPictureOfTheDay(date);
      setApodData(data);
    };

    fetchApod();
  }, []);

  const handleSearch = async () => {
    const currentDate = new Date();
    const selectedDate = new Date(searchDate);

    if (selectedDate > currentDate) {
      toast.error("Select a valid date.", {
        position: "top-right",
      });
    }
    const searchData = await nasaapiInstance.getAstronomyPictureOfTheDay(
      searchDate
    );
    setApodData(searchData);
  };

  console.log(apodData);
  return (
    <div className="flex flex-col items-center min-h-screen py-10 mt-14 bg-gradient-to-r from-amber-200 via-blue-300 to-indigo-300">
      <ToastContainer position="top-right" />
      <h1 className="text-4xl font-bold mb-8">Astronomy Picture of the Day</h1>
      <div className="flex items-center space-x-4 mb-8 mt-4">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div className="max-w-xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-md">
        {apodData ? (
          <>
            <img
              src={apodData.url}
              alt={apodData.title}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h1 className="text-2xl font-bold mb-2">{apodData.title}</h1>
            <p className="text-gray-700 mb-4">{apodData.explanation}</p>
          </>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Apod;
