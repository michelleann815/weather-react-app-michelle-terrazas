import React, { useState }from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius*9) / 5 + 32;
    }

    if (unit==="celsius")  {
        return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}°</span>
            <button type="button" className="btn btn-danger" onClick={showFahrenheit}>°F
            </button>
      </div>
    );
        } else  {
            return ( <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit())}°</span>
                <button type="button" className="btn btn-primary" onClick={showCelsius}>
            °C
          </button>
            </div>
        );
    }
        }
