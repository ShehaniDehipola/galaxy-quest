import React, { useState } from "react";
import nasaapiInstance from "../services/NasaApiService";

const MarsWeatherInfo = () => {
  const [sol, setSol] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await nasaapiInstance.getMarsWeatherInsights(sol);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data");
      console.error("Error fetching weather data: ", error);
    }
  };

  console.log(weatherData);

  return (
    <div>
      <input
        type="number"
        value={sol}
        onChange={(e) => setSol(e.target.value)}
        placeholder="Enter Sol"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {weatherData &&
        weatherData.sol_keys.map((sol) => (
          <div key={sol}>
            <h2>{sol}</h2>
            <p>Max Temp: {weatherData[sol].AT.mx}</p>
            <p>Min Temp: {weatherData[sol].AT.mn}</p>
            <p>Pressure: {weatherData[sol].PRE.av}</p>
          </div>
        ))}
    </div>
  );
};

export default MarsWeatherInfo;
