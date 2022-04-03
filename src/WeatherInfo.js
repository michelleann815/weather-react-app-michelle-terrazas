import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityTime">
        <h1 className="city">{props.data.city}</h1>
        <h5 className="date">
          <FormattedDate date={props.data.date} />
        </h5>
      </div>
      <div className="windHumidityDescription">
        <p className="wind"> {props.data.wind} km/h winds</p>
        <p className="humidity">{props.data.humidity}% humidity</p>
        <p className="description">{props.data.description}</p>
      </div>
      <WeatherIcon
        code={props.data.icon}
        alt={props.data.description}
        width="115px"
        size={74}
      />
      <WeatherTemperature celsius={props.data.temperature} />
    </div>
  );
}
