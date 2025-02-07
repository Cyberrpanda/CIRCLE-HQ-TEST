import React from "react";
import PropTypes from "prop-types";


export default function CheckedP({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 24 30"
        xmlns="http://www.w3.org/2000/svg">
 
 <path  d="M11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2C8.23855 2 5.99998 4.23858 5.99998 7C5.99998 9.76142 8.23855 12 11 12ZM11 10C12.6568 10 14 8.65685 14 7C14 5.34315 12.6568 4 11 4C9.34312 4 7.99998 5.34315 7.99998 7C7.99998 8.65685 9.34312 10 11 10Z" />
<path  d="M4.99998 22C3.34312 22 1.95103 20.62 2.49309 19.0543C3.71313 15.5304 7.06105 13 11 13C14.9389 13 18.2868 15.5304 19.5069 19.0543C20.0489 20.62 18.6568 22 17 22H4.99998ZM11 15C8.30332 15 5.96281 16.5249 4.79367 18.7594C4.48354 19.3521 4.96187 20 5.63082 20H16.3691C17.0381 20 17.5164 19.3521 17.2063 18.7594C16.0371 16.5249 13.6966 15 11 15Z"/>
</svg>

    );
  }


  CheckedP.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  CheckedP.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  