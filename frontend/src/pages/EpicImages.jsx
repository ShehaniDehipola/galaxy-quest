import React, { useState, useEffect } from "react";
import nasaapiInstance from "../services/NasaApiService";

const EpicImages = () => {
  const [epicImageData, setEpicImageData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await nasaapiInstance.getEpicImage();
        setEpicImageData(data);
        setError(null);
      } catch (error) {
        setError("Error fetching EPIC images");
        console.error("Error fetching EPIC images: ", error);
      }
    };
    fetchData();
  }, []);

  function getPreviousDayDate() {
    let today = new Date();
    let previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);

    let year = previousDay.getFullYear();
    let month = String(previousDay.getMonth() + 1).padStart(2, "0");
    let day = String(previousDay.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }
  let previousDayDate = getPreviousDayDate();

  console.log(epicImageData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-8 mt-5 text-center">EPIC Images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {error && <p className="text-red-500">{error}</p>}
        {epicImageData &&
          epicImageData.map((imageData) => {
            // Splitting date into date and time
            const [date, time] = imageData.date.split(" ");

            return (
              <div
                key={imageData.identifier}
                className="relative bg-white p-4 rounded shadow-md transform transition-all hover:scale-105 max-w-xs mx-auto"
              >
                <img
                  src={`https://api.nasa.gov/EPIC/archive/natural/2024/05/16/png/${imageData.image}.png?api_key=iA3KhcVnlxbKpNDVQox2i1zEB4TlVoSfLEgU60Go`}
                  alt="EPIC"
                  className="w-full h-auto object-cover rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded">
                  <p className="text-lg font-semibold">{date}</p>
                  <p className="text-sm">{time}</p>
                </div>
              </div>
            );
          })}
        {/* {epicImageData &&
          epicImageData.map((imageData) => (
            <div
              key={imageData.identifier}
              className="relative bg-white p-4 rounded shadow-md transform transition-all hover:scale-105 max-w-xs mx-auto m-2"
            >
              <img
                src={`https://api.nasa.gov/EPIC/archive/natural/2024/05/14/png/${imageData.image}.png?api_key=iA3KhcVnlxbKpNDVQox2i1zEB4TlVoSfLEgU60Go`}
                alt="EPIC"
                className="w-full h-auto object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded">
                <p className="text-lg font-semibold">{imageData.date}</p>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default EpicImages;
