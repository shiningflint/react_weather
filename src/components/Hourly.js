import React from 'react';
import './Hourly.css';

const Hourly = props => (
  <div className="hourly-wrap">
    <div className="hourly-chart">
      {props.children}
    </div>
  </div>
);

export default Hourly;
