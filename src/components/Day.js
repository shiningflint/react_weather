import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state= {
      active: "",
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.animationShow);
    if (newProps.animationShow === true) {
      console.log(newProps.timeout);
      setTimeout(() => {
        this.setState({ active: "active" });
      }, newProps.timeout);
    }
  }

  render() {
    return(
      <li className={("daily-item "+this.state.active)}>
        <div className="daily-mainwrap">
          <div className="daily-summary">
            <p className="daily-dayinfo">{this.props.day}</p>
            <p className="daily-summaryinfo">{this.props.summary}</p>
          </div>
          <div className="daily-icon">
            <img
              src={this.props.icon}
              className="daily-img"
              alt="Day icon" />
          </div>
          <div className="daily-highlow">
            <p>{this.props.max}&deg;&uarr;</p>
            <p>{this.props.min}&deg;&darr;</p>
          </div>
        </div>
        <div className="daily-sunwrap">
          <div className="daily-sunitem">
            <img className="daily-sun__img" src={this.props.sunriseIcon} alt={"Sunrise "+this.props.day} />
            <span>{this.props.sunriseTime}</span>
          </div>
          <div className="daily-sunitem">
            <img className="daily-sun__img" src={this.props.sunsetIcon} alt={"Sunset "+this.props.day} />
            <span>{this.props.sunsetTime}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Day
