import React from "react";
import PropTypes from "prop-types";


export default function FileCopy({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="100" 
        height="50" 
        viewBox="0 0 100.000000 100.000000"
        preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
fill="grey" stroke="none">
<path d="M385 835 c-22 -21 -25 -33 -25 -100 l0 -75 -45 0 c-35 0 -52 -6 -70
-25 -25 -24 -25 -24 -25 -235 0 -277 -14 -260 210 -260 158 0 161 1 185 25 22
21 25 33 25 100 l0 75 45 0 c35 0 52 6 70 25 24 23 25 29 25 167 l0 144 -52
50 c-29 27 -74 69 -100 92 l-48 42 -85 0 c-78 0 -88 -2 -110 -25z m175 -67 c0
-100 9 -108 117 -108 l83 0 0 -130 c0 -117 -2 -132 -20 -150 -13 -13 -33 -20
-60 -20 l-40 0 0 58 c0 57 -1 59 -52 108 -118 112 -147 134 -178 134 l-30 0 0
70 c0 57 4 74 20 90 16 16 33 20 90 20 l70 0 0 -72z m117 -86 c-89 -4 -97 3
-97 85 l0 64 83 -73 82 -73 -68 -3z m-257 -114 c0 -100 9 -108 117 -108 l83 0
0 -130 c0 -177 7 -170 -190 -170 -204 0 -190 -18 -190 240 0 242 -1 240 110
240 l70 0 0 -72z m117 -86 c-89 -4 -97 3 -97 85 l0 64 83 -73 82 -73 -68 -3z"/>
<path d="M320 330 c0 -6 43 -10 110 -10 67 0 110 4 110 10 0 6 -43 10 -110 10
-67 0 -110 -4 -110 -10z"/>
<path d="M320 250 c0 -6 43 -10 110 -10 67 0 110 4 110 10 0 6 -43 10 -110 10
-67 0 -110 -4 -110 -10z"/>
</g>
</svg>
     


    );
  }


  FileCopy.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  FileCopy.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  