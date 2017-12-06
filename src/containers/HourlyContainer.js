import React, { Component } from 'react';
import Hourly from '../components/Hourly';
import HourlyImages from '../components/HourlyImages';
import timeFormat from '../utilities/timeFormat';
import api from '../utilities/api';
import HourlyChartConfig from './HourlyChartConfig';

class HourlyContainer extends Component {
  componentDidMount() {
    this.loadChart(this.props.hourly);
  }

  loadChart(hourlyData) {
    const ctx = this.hourlyCanvas.getContext('2d');
    const hourParams = {
      labels: this.getHourLabels(hourlyData),
      temperatures: this.getHourTemperatures(hourlyData),
    }
    hourParams.maxTemp = Math.max.apply(null, hourParams.temperatures);
    hourParams.minTemp = Math.min.apply(null, hourParams.temperatures);
    const config = HourlyChartConfig(hourParams);
    return api.drawChart(ctx, config);
  }

  getHourLabels(hourlyData) {
    if ('time' in hourlyData[0]) {
      return hourlyData.map(hour => {
        const d = timeFormat.unixToUTC(hour.time);
        return timeFormat.format24h(d);
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
    return(
      <Hourly>
        <canvas ref={ elm => this.hourlyCanvas = elm } width={300} height={300} />
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
