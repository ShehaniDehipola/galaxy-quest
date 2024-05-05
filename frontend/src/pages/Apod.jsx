import React, { useEffect, useState } from "react";
import nasaapiInstance from "../services/NasaApiService";

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

  //   const handleSearch = async () => {
  //     const searchData = await nasaapiInstance.getAstronomyPictureOfTheDay(
  //       searchDate
  //     );
  //     setApodData(data);
  //   };

  console.log(apodData);
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {/* <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button> */}
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
  );
};

export default Apod;
