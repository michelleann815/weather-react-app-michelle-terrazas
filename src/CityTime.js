import React from "react";

export default function CityTime() {
  let weatherData = {
    city: "Tokyo",
    time: "Saturday 14:38"
  };

  return (
    <div className="CityTime">
      <h1 className="City">{weatherData.city}</h1>
      <h5 className="Time">{weatherData.time}</h5>
    </div>
  );
}
