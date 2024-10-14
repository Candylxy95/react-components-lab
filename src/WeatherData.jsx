import React from "react";

const WeatherData = (props) => {
  return (
    <>
      <h2>{props.day}</h2>
      <p>
        <span>condition: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </>
  );
};

export default WeatherData;
