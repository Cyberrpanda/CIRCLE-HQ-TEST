import React from "react";
import PropTypes from "prop-types";


export default function Collage({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        xmlns="http://www.w3.org/2000/svg"
         width="58" 
         height="30" 
         viewBox="0 0 48 48" 
         preserveAspectRatio="xMidYMid meet">
 <g fill="grey">
  <path d="M8 40 c-1.3 -1.3 -2 -3.3 -2 -6 l0 -4 8 0 8 0 0 6 0 6 -6 0 c-4.7 0 -6.4 -0.4 -8 -2z"/>
  <path d="M26 32 l0 -10 8 0 8 0 0 8 c0 10.4 -1.3 12 -10 12 l-6 0 0 -10z"/>
  <path d="M6 18 c0 -10.4 1.3 -12 10 -12 l6 0 0 10 0 10 -8 0 -8 0 0 -8z"/>
  <path d="M26 12 l0 -6 6 0 c7.5 0 10 2 10 8 l0 4 -8 0 -8 0 0 -6z"/>
 </g>
</svg>

    );
  }


  Collage.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Collage.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  