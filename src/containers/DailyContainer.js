import React, { Component } from 'react';
import Daily from '../components/Daily';
import Day from '../components/Day';
import timeFormat from '../utilities/timeFormat';
const iconbaseurl = "https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/";
const sunriseurl = "https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/sunrise.svg";
const sunseturl = "https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/sunset.svg";

class DailyContainer extends Component {
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
    console.log(this.refs.dailyWrapElm);
  }

  render() {
    return (
      <Daily dailyRef={ el => this.dailyWrapElm = el }>
        {this.props.daily.map(day => {
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
              sunsetIcon={sunseturl} />
          )}
        )}
      </Daily>
    );
  }
}

export default DailyContainer;
