import React from "react";

const WeatherIcon = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.alt} />
    </div>
  );
};

export default WeatherIcon;
