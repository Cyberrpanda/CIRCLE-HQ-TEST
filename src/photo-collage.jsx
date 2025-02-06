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
        viewBox="-5.0 -10.0 110.0 135.0"
        xmlns="http://www.w3.org/2000/svg">
 
<path d="M30.5,16.5l-14,0l-0,14l11.294,0c0.717,0 1.406,-0.285 1.913,-0.793c0.508,-0.507 0.793,-1.196 0.793,-1.913l-0,-11.294Zm-15,-15l-11.294,0c-0.717,-0 -1.406,0.285 -1.913,0.793c-0.508,0.507 -0.793,1.196 -0.793,1.913c-0,5.234 -0,18.354 -0,23.588c-0,0.717 0.285,1.406 0.793,1.913c0.507,0.508 1.196,0.793 1.913,0.793l11.294,-0l-0,-29Zm1,0l-0,14l14,0l-0,-11.294c0,-0.717 -0.285,-1.406 -0.793,-1.913c-0.507,-0.508 -1.196,-0.793 -1.913,-0.793l-11.294,0Z"/>

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