import React, { useState }from "react";

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
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°</span>
            <button type="button" className="btn btn-danger" onClick={showFahrenheit}>°F
            </button>
      </div>
    );
        } else  {
            return ( <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit())}</span>
                <span className="unit">°</span>
                <button type="button" className="btn btn-primary" onClick={showCelsius}>
            °C
          </button>
            </div>
        );
    }
        }
