import React from "react";
import PropTypes from "prop-types";


export default function Collage({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 32 40"
        xmlns="http://www.w3.org/2000/svg">
 
 <path d="M16,17v9h6a5,5,0,0,0,5-5V17Z"/>
<path d="M16,15H27V11a5,5,0,0,0-5-5H16Z"/>
<path d="M14,6H10a5,5,0,0,0-5,5V21a5,5,0,0,0,5,5h4Z"/>

</svg>

    );
  }


  Collage.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Collage.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  