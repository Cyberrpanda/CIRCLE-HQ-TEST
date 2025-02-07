import React from "react";
import PropTypes from "prop-types";


export default function Star({ className, stroke = "currentColor", width = "24", height = "24" }) {
    return (
        <svg  
        className={className}
        fill="grey"
        stroke={stroke}
        width={width}
        height={height}
        viewBox="0 0 100 125"
        xmlns="http://www.w3.org/2000/svg">
 
 
 <path d="M34.4117609,73.5920218 L37.3892023,56.2322066 L24.7765583,43.9379173 L42.2068036,41.4051544 L50.0018462,25.6106728 L57.7968889,41.4051544 L75.2271342,43.9379173 L62.6144902,56.2322066 L65.5919316,73.5920218 L50.0018462,65.3958289 L34.4117609,73.5920218 Z M50.0018462,62.0065017 L61.6075385,68.1079752 L59.3910485,55.1848469 L68.7802508,46.0326367 L55.8046924,44.1471777 L50.0018462,32.3893272 L44.1990001,44.1471777 L31.2234417,46.0326367 L40.612644,55.1848469 L38.396154,68.1079752 L50.0018462,62.0065017 Z"/>
</svg>

    );
  }


  Star.propTypes = {
    className: PropTypes.string,
    stroke: PropTypes.string, 
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  };
  
  
  Star.defaultProps = {
    stroke: "currentColor",
    width: "24",
    height: "24",
  };  