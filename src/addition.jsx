import React from "react";
import PropTypes from "prop-types";


export default function Add({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg 
        className={className}
        fill="white"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 512 640"
        xmlns="http://www.w3.org/2000/svg" >
         
         <path  d="M341.4,256c0,5.2-4.3,9.5-9.5,9.5h-63.8c-1.5,0-2.7,1.2-2.7,2.7v63.7c0,5.8-5.2,10.3-11.1,9.3    c-4.7-0.8-7.9-5.1-7.9-9.9v-63.2c0-1.5-1.2-2.7-2.7-2.7h-63.7c-5.8,0-10.3-5.1-9.4-11.1c0.8-4.7,5.2-7.9,9.9-7.9h63.3    c1.5,0,2.7-1.2,2.7-2.7v-63.7c0-5.7,5.1-10.3,11.1-9.3c4.7,0.8,7.9,5.1,7.9,9.9v63.2c0,1.5,1.2,2.7,2.7,2.7h63.3    c4.7,0,9.1,3.2,9.9,7.9C341.4,254.9,341.4,255.5,341.4,256z"/>
<path  d="M256,43.9c-117,0-212.1,95.1-212.1,212.1c0,119,88.9,212.1,202.4,212.1c120.2,0,221.8-97.1,221.8-212.1    C468.1,139.1,372.9,43.9,256,43.9z M246.3,449.1c-104.5,0-183.4-83-183.4-193.1c0-106.5,86.7-193.1,193.1-193.1    c106.5,0,193.1,86.6,193.1,193.1C449.1,360.7,356.2,449.1,246.3,449.1z"/>
          </svg>
        
    );
  }


  Add.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Add.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  