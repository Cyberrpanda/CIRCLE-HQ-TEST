import React from "react";
import PropTypes from "prop-types";


export default function Inbox({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        
<svg 
 xmlns="http://www.w3.org/2000/svg"
 fill="grey"
 width="80" 
 height="60" 
 viewBox="0 0 80.000000 100.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
>
<path d="M380 695 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"/>
<path d="M263 654 c-33 -17 -59 -63 -49 -89 3 -10 19 -15 43 -15 58 0 78 -9
97 -41 13 -22 25 -29 47 -29 16 0 29 3 29 8 0 4 9 18 19 32 15 19 32 26 73 30
50 5 53 7 56 35 5 48 -35 79 -101 80 -41 0 -52 -3 -55 -17 -2 -11 3 -18 12
-18 23 0 20 -23 -7 -48 -29 -28 -38 -28 -65 1 -26 27 -28 47 -7 47 8 0 15 9
15 20 0 16 -7 20 -37 20 -21 0 -52 -7 -70 -16z"/>
<path d="M217 513 c-4 -3 -7 -30 -7 -58 0 -96 54 -123 232 -113 76 5 93 9 114
29 22 21 25 30 22 84 -3 54 -5 60 -27 63 -39 6 -65 -6 -84 -38 -17 -27 -23
-30 -71 -30 -47 0 -54 3 -64 25 -16 35 -93 60 -115 38z"/>
</g>
</svg>

    );
  }


  Inbox.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Inbox.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  