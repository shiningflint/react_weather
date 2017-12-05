import React, { Component } from 'react';
import './App.css';
import MainContainer from '../containers/MainContainer';
import HourlyContainer from '../containers/HourlyContainer';
import DailyContainer from '../containers/DailyContainer';
import DarkSky from './DarkSky';
import api from '../utilities/api';
// const jsonurl = 'https://acbw-api-proxy.herokuapp.com/';
const jsonurl = 'https://s3-ap-southeast-1.amazonaws.com/acbw/tokyo4december.json';
const maxheight = 500;

class App extends Component {
  constructor() {
    super();
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      weatherData: false,
    };
  }

  componentDidMount() {
    this.setWindowSize();
    api.fetchWeather(jsonurl)
      .then(response => {
        this.setState({ weatherData: response.data });
      })
      .catch(error => (console.log(error)));
  }

  setWindowSize() {
    const mainWindowHeight = (window.innerWidth > maxheight ? maxheight : window.innerWidth);
    this.setState({
      windowWidth: mainWindowHeight,
      windowHeight: window.innerHeight,
    });
  }

  render() {
    const main = (this.state.weatherData ?
      <MainContainer
        windowWidth={this.state.windowWidth}
        currently={this.state.weatherData.currently}
        today={this.state.weatherData.daily.data[0]} /> : "" );
    const hourly = (this.state.weatherData ?
      <HourlyContainer hourly={this.state.weatherData.hourly.data} /> : ""
    );
    const daily = (this.state.weatherData ?
      <DailyContainer daily={this.state.weatherData.daily.data} /> : ""
    );
    return (
      <div className="App">
        {main}
        {hourly}
        {daily}
        <DarkSky url="https://darksky.net/poweredby/" text="Weather data from " linkText="Dark Sky" />
      </div>
    );
  }
}

export default App;
