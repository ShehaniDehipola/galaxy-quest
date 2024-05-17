import React, { useState } from "react";
import nasaapiInstance from "../services/NasaApiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MarsRoverPhotos = () => {
  const [sol, setSol] = useState("");
  const [camera, setCamera] = useState("");
  const [roverPhotos, setRoverPhotos] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await nasaapiInstance.getMarsRoverPhotos(sol, camera);
      if (data.photos.length === 0) {
        toast.error("No images found for the selected camera and sol.", {
          position: "top-right",
        });
      }
      setRoverPhotos(data);
      console.log(roverPhotos);
      setError(null);
    } catch (error) {
      toast.error("Error fetching Mars rover photos", {
        position: "top-right",
      });
      console.error("Error fetching Mars rover photos: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-4">Mars Rover Photos</h1>
      <div className="flex flex-row items-end w-full max-w-lg p-8 rounded space-x-4">
        <div className="flex-grow">
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div className="flex-grow">
          <label
            htmlFor="camera"
            className="block text-sm font-medium text-gray-700"
          >
            Camera:
          </label>
          <select
            id="camera"
            value={camera}
            onChange={(e) => setCamera(e.target.value)}
            className="mt-1 block w-64 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          >
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="mast">Mast Camera</option>
            <option value="chemcam">Chemistry and Camera Complex</option>
            <option value="navcam">Navigation Camera</option>
          </select>
        </div>
        <button
          onClick={handleSearch}
          className=" bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 w-32"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {roverPhotos && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 m-44">
          {roverPhotos.photos.map((photo) => (
            <div key={photo.id} className="bg-white p-4 rounded shadow">
              <img
                key={photo.id}
                src={photo.img_src}
                alt={`Mars Rover - ${photo.id}`}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarsRoverPhotos;
