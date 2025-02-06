import React from "react";
import PropTypes from "prop-types";


export default function Fblock({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="-5.0 -10.0 110.0 135.0"
        xmlns="http://www.w3.org/2000/svg">

<path d="m66.668 9.375h-33.336c-4.1445 0-8.1172 1.6445-11.047 4.5781-2.9297 2.9297-4.5781 6.9023-4.5781 11.047v50c0 4.1445 1.6484 8.1172 4.5781 11.047 2.9297 2.9336 6.9023 4.5781 11.047 4.5781h33.336c4.1445 0 8.1172-1.6445 11.047-4.5781 2.9297-2.9297 4.5781-6.9023 4.5781-11.047v-50c0-4.1445-1.6484-8.1172-4.5781-11.047-2.9297-2.9336-6.9023-4.5781-11.047-4.5781zm9.375 65.625c0 5.1758-4.1992 9.375-9.375 9.375h-33.336c-5.1758 0-9.375-4.1992-9.375-9.375v-50c0-5.1758 4.1992-9.375 9.375-9.375h33.336c5.1758 0 9.375 4.1992 9.375 9.375zm-22.918-20.832c-0.023438 1.7148-1.4102 3.1016-3.125 3.125h-16.668c-1.7227 0-3.125-1.4023-3.125-3.125 0-1.7266 1.4023-3.125 3.125-3.125h16.668c1.7148 0.019531 3.1016 1.4062 3.125 3.125zm16.668-18.75c-0.023438 1.7148-1.4102 3.1016-3.125 3.125h-33.336c-1.7227 0-3.125-1.4023-3.125-3.125 0-1.7266 1.4023-3.125 3.125-3.125h33.336c1.7148 0.019531 3.1016 1.4062 3.125 3.125z"/>
</svg>

    );
  }


  Fblock.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Fblock.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  