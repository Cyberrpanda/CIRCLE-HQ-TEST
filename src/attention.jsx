import React from "react";
import PropTypes from "prop-types";

export default function Attention({ className, stroke = "currentColor", width = "24", height = "24"}) {
  return (
    <svg
    className={className}
    fill="grey"
    stroke={stroke}
    width={width}
    height={height}
    viewBox="0 0 338 422.5"
    xmlns="http://www.w3.org/2000/svg"
    >
      
      <path d="M169 0c93,0 169,76 169,169 0,93 -76,169 -169,169 -93,0 -169,-76 -169,-169 0,-93 76,-169 169,-169zm0 20c-82,0 -149,67 -149,149 0,82 67,149 149,149 82,0 149,-67 149,-149 0,-82 -67,-149 -149,-149z"/>
  <path d="M169 218c-9,0 -17,7 -17,16 0,9 8,17 17,17 9,0 17,-8 17,-17 0,-9 -8,-16 -17,-16z"/>
  <path d="M181 194l4 -96c1,-6 -4,-11 -11,-11l-11 0c-6,0 -11,5 -11,11l5 96c1,15 23,15 24,0z"/>
      
    </svg>
  );
}

Attention.propTypes = {
  className: PropTypes.string,
  stroke: PropTypes.string, 
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
};

Attention.defaultProps = {
  stroke: "currentColor",
  width: "24",
  height: "24",
};  