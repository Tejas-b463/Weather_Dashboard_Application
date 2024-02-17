import React from "react";

const EventShow = ({ location, weatherData }) => {
  return (
    <div>
      <h2>Weather Forecast for {location}</h2>
      <p>Temperature: {weatherData?.main?.temp} °C</p>
      <p>Description: {weatherData?.weather[0]?.description}</p>
      <p>Humidity: {weatherData?.main?.humidity}%</p>
      <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
    </div>
  );
};

export default EventShow;
