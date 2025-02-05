import React from "react";
import PropTypes from "prop-types";


export default function Speaker({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        xmlns="http://www.w3.org/2000/svg"
        fill="grey"
        width="58"
        height="60"
        viewBox="0 0 58.000000 74.000000"
        preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,74.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M215 460 c-27 -16 -64 -29 -82 -30 -41 0 -53 -22 -53 -95 0 -65 13
-95 40 -95 17 0 17 2 -5 25 -19 18 -25 35 -25 67 0 58 22 88 63 88 18 0 50 11
72 25 49 30 71 31 85 6 14 -28 13 -224 -2 -239 -17 -17 -46 -15 -77 7 -15 11
-40 23 -57 27 -28 6 -28 6 -9 -9 11 -9 25 -17 30 -17 6 0 21 -9 35 -20 35 -28
74 -26 94 5 12 19 16 50 16 133 0 101 -2 110 -23 130 -30 28 -41 27 -102 -8z"/>
<path d="M430 415 c25 -45 25 -105 0 -157 -23 -49 -23 -48 -10 -48 15 0 50 86
50 123 0 37 -34 117 -49 117 -6 0 -2 -16 9 -35z"/>
<path d="M385 393 c3 -10 9 -30 12 -45 5 -24 23 -41 23 -22 0 21 -25 84 -33
84 -5 0 -6 -8 -2 -17z"/>
<path d="M387 288 c-6 -21 -2 -36 7 -27 10 11 16 49 8 49 -5 0 -12 -10 -15
-22z"/>
</g>
</svg>


    );
  }


  Speaker.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Speaker.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  