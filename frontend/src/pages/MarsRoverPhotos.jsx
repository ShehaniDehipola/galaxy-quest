import React, { useState } from "react";
import nasaapiInstance from "../services/NasaApiService";

const MarsRoverPhotos = () => {
  const [sol, setSol] = useState("");
  const [page, setPage] = useState("");
  const [roverPhotos, setRoverPhotos] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await nasaapiInstance.getMarsRoverPhotos(sol, page);
      setRoverPhotos(data);
      setError(null);
    } catch (error) {
      setError("Error fetching Mars rover photos");
      console.error("Error fetching Mars rover photos: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Mars Rover Photos</h1>
        <div className="mb-4">
          <label
            htmlFor="sol"
            className="block text-sm font-medium text-gray-700"
          >
            Sol:
          </label>
          <input
            type="text"
            id="sol"
            placeholder="Enter sol"
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-6"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="page"
            className="block text-sm font-medium text-gray-700"
          >
            Page Number:
          </label>
          <input
            type="text"
            id="page"
            placeholder="Enter page number"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-6"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {roverPhotos && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roverPhotos.photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.img_src}
                alt={`Mars Rover - ${photo.id}`}
                className="rounded"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarsRoverPhotos;
