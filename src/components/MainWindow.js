import React from 'react';
import './MainWindow.css';

const MainWindow = (props) => {
  const mainStyle = {
    height: props.height,
    backgroundImage: `url(${props.bgurl})`,
    opacity: props.opacity
  };
  return (
    <div className="main-window" style={mainStyle}>
      <div className="main-window__content">
        <p className="main-window__item-upper">
          <span className="main-window__text1">{props.summary}</span>
          <span className="main-window__text2">Tokyo, Japan</span>
        </p>
        <p className="main-window__item-degrees">
          {Math.round(props.temperature)}
        </p>
        <p className="main-window__item-below">
          Day {Math.round(props.tempHigh)}&deg;&uarr; Night {Math.round(props.tempLow)}&deg;&darr;
        </p>
      </div>
    </div>
)};

export default MainWindow;
