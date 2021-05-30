import React from "react";

export default function WindHumidityDescription() {
  let weatherData = {
    humidity: 68,
    wind: 6,
    description: "broken clouds"
  };

  return (
    <div className="WindHumidityDescription">
      <p className="Wind"> {weatherData.wind} km/h</p>
      <p className="Humidity">{weatherData.humidity}%</p>
      <p className="Description">{weatherData.description}</p>
    </div>
  );
}
