import React from "react";
import PropTypes from "prop-types";


export default function Sadd({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 100 125"
        xmlns="http://www.w3.org/2000/svg">
 
 
 <path d="M77,51H51v26c0,1.341-2,1.342-2,0V51H23c-1.34,0-1.343-2,0-2h26V23c0-1.342,2-1.34,2,0v26h26C78.341,49,78.342,51,77,51z"/>
</svg>

    );
  }


  Sadd.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Sadd.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  