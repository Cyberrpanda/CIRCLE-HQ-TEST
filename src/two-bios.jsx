import React from "react";
import PropTypes from "prop-types";


export default function DoubleBio({ stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg
            fill="grey"
            width="150"
            height="170"
            viewBox="0 0 210 297"
            xmlns="http://www.w3.org/2000/svg"
            ><defs
            id="defs1" />
            <g
                id="layer1"><image
                width="73"
                height="79"
                preserveAspectRatio="none"
                style={{ imageRendering: 'optimizeQuality' }}
                xlinkHref="data:image/png;base64,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&#10;YII=&#10;"
                id="image1"
                x="72.134003"
                y="97.852234" />
            </g>
            
        </svg>
     


    );
  }


  DoubleBio.propTypes = {
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  DoubleBio.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  