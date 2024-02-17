import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { API_KEY } from "../../utils/constant";

const WeatherForm = () => {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = format(date, "yyyy-MM-dd");

    if (!location.trim()) {
      setError("Location cannot be empty");
      return;
    }

    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Enter Valid Location");
      }
      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <br />
          <DatePicker selected={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>Location:</label>
          <br />
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Get Weather Forecast</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather Forecast for {location}</h2>
          <p>Temperature: {weatherData?.main?.temp} °C</p>
          <p>Description: {weatherData?.weather[0]?.description}</p>
          <p>Humidity: {weatherData?.main?.humidity}%</p>
          <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;
