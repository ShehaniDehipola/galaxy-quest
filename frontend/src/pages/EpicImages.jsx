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
    <div className="container mx-auto px-4">
      <h1 className="text-4xl mt-5">EPIC Images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {error && <p className="text-red-500">{error}</p>}
        {epicImageData &&
          epicImageData.map((imageData) => (
            <div
              key={imageData.identifier}
              className="bg-white p-4 rounded shadow"
            >
              <img
                src={`https://api.nasa.gov/EPIC/archive/natural/${previousDayDate}/png/${imageData.image}.png?api_key=iA3KhcVnlxbKpNDVQox2i1zEB4TlVoSfLEgU60Go`}
                alt="EPIC"
                style={{ maxWidth: "100%", marginTop: "20px" }}
                className="w-full rounded"
              />
              <p className="text-lg font-semibold mt-2">
                Date: {imageData.date}
              </p>
              <p className="mt-1">Explanation: {imageData.caption}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EpicImages;
