import React from 'react';
import './Daily.css';

const Daily = props => (
  <div className="tend-wrapper" ref={props.dailyRef}>
    <ul className="tend-ul">
      {props.children}
    </ul>
  </div>
);

export default Daily;
