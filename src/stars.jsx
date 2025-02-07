import React from "react";
import PropTypes from "prop-types";


export default function Stars({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg 
        className={className}
        fill="gold"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="-5.0 -10.0 110.0 135.0"
        xmlns="http://www.w3.org/2000/svg" >
         
         <path d="m51.699 74.641 15.98 8.3984c2.6719 1.4102 5.8008-0.87109 5.2891-3.8398l-3.0508-17.801c-0.19922-1.1797 0.19141-2.3906 1.0508-3.2305l12.93-12.602c2.1602-2.1094 0.96875-5.7812-2.0195-6.2188l-17.871-2.6016c-1.1914-0.17188-2.2109-0.92188-2.75-1.9883l-7.9883-16.191c-1.3398-2.7109-5.1992-2.7109-6.5391 0l-7.9883 16.191c-0.53125 1.0781-1.5586 1.8203-2.75 1.9883l-17.871 2.6016c-2.9883 0.42969-4.1797 4.1094-2.0195 6.2188l12.93 12.602c0.85938 0.83984 1.25 2.0391 1.0508 3.2305l-3.0508 17.801c-0.51172 2.9805 2.6211 5.25 5.2891 3.8398l15.98-8.3984c1.0586-0.55859 2.3281-0.55859 3.3906 0z"/>
          </svg>
        
    );
  }


  Stars.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Stars.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  