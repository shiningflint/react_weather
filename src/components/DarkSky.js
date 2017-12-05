import React from 'react';
import './DarkSky.css';

const DarkSky = props => (
  <div className="dark-sky">
    <span>{props.text}</span>
    <a href={props.url} className="dark-sky__link" target="_blank">{props.linkText}</a>
  </div>
);

export default DarkSky;
