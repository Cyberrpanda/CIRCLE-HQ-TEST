import React from "react";
import PropTypes from "prop-types";


export default function Check({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 256 320"
        xmlns="http://www.w3.org/2000/svg">
 
 
 <path d="M124.467 203.827c43.136 0 78.080-34.944 78.080-78.080s-34.944-78.080-78.080-78.080c-43.136 0-78.080 34.944-78.080 78.080 0.026 43.111 34.969 78.055 78.080 78.080zM76.519 77.773c12.288-12.288 29.21-19.865 47.974-19.865 18.739 0 35.686 7.578 47.975 19.865s19.865 29.209 19.865 47.975c0 18.739-7.577 35.686-19.865 47.975s-29.209 19.865-47.975 19.865c-18.739 0-35.686-7.577-47.975-19.865s-19.865-29.209-19.865-47.975c0-18.765 7.578-35.686 19.865-47.975z" />
 <path d="M172.749 92.083c0 0-10.061-4.403-14.72 0.768-4.633 5.145-46.157 53.76-46.157 53.76s-15.77-17.024-20.941-21.657-14.72 0.768-14.72 0.768l35.763 38.144 60.775-71.782z" />
</svg>

    );
  }


  Check.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Check.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  