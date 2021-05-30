import React from "react";

export default function TemperatureFC() {
  let weatherData = {
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    temperature: 20
  };

  return (
    <div className="TemperatureFC">
      <img
        src={weatherData.imgUrl}
        width="115px"
        className="WeatherIcon"
        alt="weather today"
      />
      <div className="Temperature">{weatherData.temperature}°</div>
      <div className="FahrenheitCelsius">
        <button type="button" className="btn btn-danger">
          °F
        </button>
        <button type="button" className="btn btn-primary">
          °C
        </button>
      </div>
    </div>
  );
}
