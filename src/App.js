import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return (
    <div className="App">
        <div className="container">
                <Weather let defaultCity="Tokyo"/>
            <footer>
                <p>
                    <a
              href="https://github.com/michelleann815/my-shecodes-plus-weather-app "
              target="_blank"
              rel="noopener noreferrer"
                    >
              Open-source code
                    </a>{" "}
                     and{" "}
          <a
            href="https://thirsty-knuth-23b2aa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>{" "}
                 by Michelle Terrazas
                </p>
            </footer>
        </div>
    </div>
    )
}