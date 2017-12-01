import React from 'react';
import './HourlyImages.css';

const HourlyImages = props => (
  <img
    src={props.src}
    alt={props.alt}
    className="hourly-icon"
    style={props.style} />
);

export default HourlyImages;
