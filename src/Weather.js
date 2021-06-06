import './Weather.css';

import CityTime from "./CityTime";
import WindHumidityDescription from "./WindHumidityDescription";
import TemperatureFC from "./TemperatureFC";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
    <div className="container">
      <div className="card">
        <CityTime />
        <p>
          <WindHumidityDescription />
        </p>
        <TemperatureFC />
        <Search />
        <footer className="Signature">
          <p>
            <a
              href="https://github.com/michelleann815/my-shecodes-plus-weather-app "
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Michelle Terrazas
          </p>
        </footer>
        </div>
      </div>
    </div>
  );
}
