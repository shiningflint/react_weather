import React, { Component } from 'react';
import Daily from '../components/Daily';
import Day from '../components/Day';
import timeFormat from '../utilities/timeFormat';
import throttle from 'lodash.throttle';
const iconbaseurl = "https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/";
const sunriseurl = "https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/sunrise.svg";
const sunseturl = "https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/sunset.svg";

class DailyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationShow: false,
    };
    this.handleScroll = throttle(this.handleScroll.bind(this), 300);
  }

  formatDate(dateObj) {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const result = (days[dateObj.getDay()]+", "+months[dateObj.getMonth()]+" "+dateObj.getDate().toString());
    return result;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    this.showOnScreen(this.dailyWrapElm, 100);
  }

  showOnScreen(elm, offset) {
    if (elm.getBoundingClientRect().top < window.innerHeight - offset) {
      this.setState({ animationShow: true, });
      window.removeEventListener("scroll", this.handleScroll);
    } else {
      return;
    }
  }

  render() {
    return (
      <Daily dailyRef={ el => this.dailyWrapElm = el }>
        {
          this.props.daily.map((day, index) => {
          const d = timeFormat.unixToUTC(day.time);
          const sunriseTime = timeFormat.unixToUTC(day.sunriseTime);
          const sunsetTime = timeFormat.unixToUTC(day.sunsetTime);
          return (
            <Day
              key={day.time}
              day={this.formatDate(d)}
              summary={day.summary}
              max={Math.round(day.temperatureMax)}
              min={Math.round(day.temperatureMin)}
              icon={iconbaseurl+day.icon+".svg"}
              sunriseTime={timeFormat.format24h(sunriseTime, true)}
              sunsetTime={timeFormat.format24h(sunsetTime, true)}
              sunriseIcon={sunriseurl}
              sunsetIcon={sunseturl}
              animationShow={this.state.animationShow}
              timeout={160*index} />
          )})
        }
      </Daily>
    );
  }
}

export default DailyContainer;
