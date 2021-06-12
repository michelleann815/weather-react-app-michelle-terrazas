import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
   setWeatherData ({  
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey="5888f249350e3151a80f06ae9f2e6ba9";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
      <WeatherInfo data={weatherData} />
      <form className="submit" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter city here" className="form-control"
                autoFocus="on"
                onChange={handleCityChange}/>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
      </form>
    </div>
  );
     } else {
       search ();
       return "Loading...";
     }
    }
