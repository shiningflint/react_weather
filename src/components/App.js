import React, { Component } from 'react';
// import logo from './images/puff.svg';
import './App.css';
import MainContainer from '../containers/MainContainer';
import api from '../api';
const jsonurl = 'https://s3-ap-southeast-1.amazonaws.com/acbw/tokyo_weather.json';

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
    return (
      <div className="App">
        {main}
      </div>
    );
  }
}

export default App;