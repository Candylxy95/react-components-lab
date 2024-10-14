import React from "react";
import { weatherForecasts } from "./App";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";
import "./WeatherForecast.css";

const WeatherForecast = () => {
  return weatherForecasts.map((elem, idx) => (
    <div className="weather" key={idx}>
      <WeatherIcon imgSrc={elem.img} alt={elem.imgAlt} />
      <WeatherData
        day={elem.day}
        conditions={elem.conditions}
        time={elem.time}
      />
    </div>
  ));
};

export default WeatherForecast;
