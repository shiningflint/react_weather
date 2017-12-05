import React, { Component } from 'react';
import './App.css';
import MainContainer from '../containers/MainContainer';
import HourlyContainer from '../containers/HourlyContainer';
import DailyContainer from '../containers/DailyContainer';
import api from '../utilities/api';
const jsonurl = 'https://acbw-api-proxy.herokuapp.com/';

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
    this.setState({
      windowWidth: window.innerWidth,
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
      </div>
    );
  }
}

export default App;
