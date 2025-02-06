import React from "react";
import PropTypes from "prop-types";


export default function Leave({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg 
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 32 40"
        xmlns="http://www.w3.org/2000/svg" >
          <path d="M21.45158,28.91714H10.54826A1.90758,1.90758,0,0,1,8.643,27.01138V4.98843a1.90716,1.90716,0,0,1,1.90527-1.90527H21.45158a1.90758,1.90758,0,0,1,1.90576,1.90527V9.421a.5.5,0,1,1-1,0V4.98843a.90659.90659,0,0,0-.90576-.90527H10.54826a.90649.90649,0,0,0-.90527.90527V27.01138a.90659.90659,0,0,0,.90527.90576H21.45158a.90669.90669,0,0,0,.90576-.90576V23.04263a.5.5,0,1,1,1,0v3.96875A1.908,1.908,0,0,1,21.45158,28.91714Z"/>
<path d="M28.49943,16.50015h-16a.5.5,0,0,1,0-1h16a.5.5,0,0,1,0,1Z"/>
<path d="M24.78508,20.21451a.5.5,0,0,1-.35352-.85352l3.36084-3.36084-3.36084-3.36084a.49995.49995,0,1,1,.707-.707L28.853,15.64663a.49983.49983,0,0,1,0,.707L25.13859,20.068A.49835.49835,0,0,1,24.78508,20.21451Z"/>
          </svg>
        
    );
  }


  Leave.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Leave.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  