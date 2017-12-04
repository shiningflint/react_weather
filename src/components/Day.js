import React from 'react';
import './Day.css';

const Day = props => {
  return (
    <li className="daily-item">
      <div className="daily-mainwrap">
        <div className="daily-summary">
          <p className="daily-dayinfo">{props.day}</p>
          <p className="daily-summaryinfo">{props.summary}</p>
        </div>
        <div className="daily-icon">
          <img
            src={props.icon}
            className="daily-img"
            alt="Day icon" />
        </div>
        <div className="daily-highlow">
          <p>{props.max}&deg;&uarr;</p>
          <p>{props.min}&deg;&darr;</p>
        </div>
      </div>
      <div className="daily-sunwrap">
        <div className="daily-sunitem">
          <img className="daily-sun__img" src={props.sunriseIcon} alt={"Sunrise "+props.day} />
          <span>{props.sunriseTime}</span>
        </div>
        <div className="daily-sunitem">
          <img className="daily-sun__img" src={props.sunsetIcon} alt={"Sunset "+props.day} />
          <span>{props.sunsetTime}</span>
        </div>
      </div>
    </li>
  );
};

export default Day
