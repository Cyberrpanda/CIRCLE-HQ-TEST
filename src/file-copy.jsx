import React from "react";
import PropTypes from "prop-types";


export default function FileCopy({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg 
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 64 80"
        xmlns="http://www.w3.org/2000/svg">
<path d="M51.02,0H15A6.006,6.006,0,0,0,9,6a6.006,6.006,0,0,0-6,6V58a6.006,6.006,0,0,0,6,6H45a6.006,6.006,0,0,0,6-6,6.006,6.006,0,0,0,6-6V5.98A5.987,5.987,0,0,0,51.02,0ZM49,58a4,4,0,0,1-4,4H9a4,4,0,0,1-4-4V12A4,4,0,0,1,9,8H31a5.688,5.688,0,0,1,4.246,1.906l12,13.5.007.008.006.006A6.887,6.887,0,0,1,49,28Zm6-6a4,4,0,0,1-4,4V28a8.881,8.881,0,0,0-2.246-5.906l-.747.664.74-.672L36.74,8.578A7.684,7.684,0,0,0,31,6H11a4,4,0,0,1,4-4H51.02A3.984,3.984,0,0,1,55,5.98Z"/>
<path d="M42,33H11a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/>
<path d="M42,41H11a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/>
<path d="M42,49H11a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/>
</svg>
     


    );
  }


  FileCopy.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  FileCopy.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  