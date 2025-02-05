import React from "react";
import PropTypes from "prop-types";


export default function DashLine({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg 
            stroke="grey"
            fill="grey"
            width={"50"}
            height={"50"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path 
            d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" />
        </svg>
    );
  }


  DashLine.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  DashLine.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  