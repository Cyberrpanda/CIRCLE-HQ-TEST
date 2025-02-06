import React from "react";
import PropTypes from "prop-types";

export default function DashLine({ className, stroke = "currentColor", width = "24", height = "24"}) {
  return (
    <svg
    className={className}
    fill="grey"
    stroke={stroke}
    width={width}
    height={height}
    viewBox="-5.0 -10.0 110.0 135.0"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M95.6,51.9H4.4c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9h91.3c1,0,1.9,0.8,1.9,1.9S96.7,51.9,95.6,51.9z"/>
      
    </svg>
  );
}

DashLine.propTypes = {
  className: PropTypes.string,
  stroke: PropTypes.string, 
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
};

DashLine.defaultProps = {
  stroke: "currentColor",
  width: "24",
  height: "24",
};  