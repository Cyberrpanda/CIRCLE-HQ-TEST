import React from "react";
import PropTypes from "prop-types";


export default function Fblock({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="59"
        viewBox="0 0 62.000000 74.000000"
        preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,74.000000) scale(0.100000,-0.100000)"
fill="grey" stroke="none">
<path d="M183 527 c-65 -24 -68 -34 -68 -182 0 -134 0 -135 28 -162 26 -27 32
-28 147 -31 141 -4 173 5 201 60 15 29 19 58 19 128 0 165 -28 194 -189 197
-65 2 -118 -2 -138 -10z m281 -42 c25 -28 26 -36 26 -141 0 -96 -3 -115 -20
-136 -49 -63 -286 -64 -327 -2 -10 15 -17 57 -20 121 -4 82 -1 104 14 133 28
53 52 61 185 58 116 -3 117 -3 142 -33z"/>
<path d="M230 400 c0 -6 32 -10 75 -10 43 0 75 4 75 10 0 6 -32 10 -75 10 -43
0 -75 -4 -75 -10z"/>
<path d="M233 288 c-2 -5 31 -8 73 -8 43 0 74 3 71 7 -10 9 -138 10 -144 1z"/>
</g>
</svg>

    );
  }


  Fblock.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Fblock.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  