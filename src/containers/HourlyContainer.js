import React, { Component } from 'react';
import Hourly from '../components/Hourly';
import HourlyImages from '../components/HourlyImages';
import Chart from 'chart.js';
import HourlyChartConfig from './HourlyChartConfig';

class HourlyContainer extends Component {
  componentDidMount() {
    this.loadChart(this.props.hourly);
  }

  loadChart(hourlyData) {
    const ctx = this.refs.hourlyCanvas.getContext('2d');
    const hourParams = {
      labels: this.getHourLabels(hourlyData),
      temperatures: this.getHourTemperatures(hourlyData),
    }
    hourParams.maxTemp = Math.max.apply(null, hourParams.temperatures);
    hourParams.minTemp = Math.min.apply(null, hourParams.temperatures);
    const config = HourlyChartConfig(hourParams);
    return new Chart(ctx, config);
  }

  getHourLabels(hourlyData) {
    if ('time' in hourlyData[0]) {
      return hourlyData.map(hour => {
        const utcSeconds = hour.time;
        const d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        if (d.getHours() < 10) {
          return "0"+d.getHours().toString()+":00";
        } else {
          return d.getHours().toString()+":00";
        }
      });
    }
  }

  getHourTemperatures(hourlyData) {
    if ('temperature' in hourlyData[0]) {
      return hourlyData.map(hour => {
        return Math.round(hour.temperature);
      });
    }
  }

  render() {
    console.log(this.props.hourly);
    return(
      <Hourly>
        <canvas ref="hourlyCanvas" width={300} height={300} />
        { this.props.hourly.map((hour, index) => (
          <HourlyImages
            key={index}
            src={`https://s3-ap-southeast-1.amazonaws.com/acbw/assets/weather_icons/${hour.icon}.svg`}
            alt={hour.icon}
            style={{left: String(61.7*index)+"px"}} />
        )) }
      </Hourly>
    )
  }
}

export default HourlyContainer;
