import React from "react";
import './Weather.css';
import CityTime from "./CityTime";
import WindHumidityDescription from "./WindHumidityDescription";
import TemperatureFC from "./TemperatureFC";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
        <CityTime />
        <p>
          <WindHumidityDescription />
        </p>
        <TemperatureFC />
        <Search />
    </div>
  );
}
