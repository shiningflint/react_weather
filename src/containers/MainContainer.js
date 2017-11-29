import React, { Component } from 'react';
import MainWindow from '../components/MainWindow';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: "0",
      bgurl: 'https://s3-ap-southeast-1.amazonaws.com/acbw/tokyo.jpg',
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    this.image = new Image();
    this.image.src = this.state.bgurl;
    this.image.onload = this.handleImageLoaded;
    this.image.onerror = this.handleImageError;
  }

  handleImageLoaded() {
    this.setState({
      opacity: "1",
    });
  }

  handleImageError() {
    console.log("load image error");
  }

  render() {
    const { windowWidth, currently, today } = this.props;
    return (
      <MainWindow
        height={windowWidth}
        opacity={this.state.opacity}
        bgurl={this.state.bgurl}
        temperature={currently.temperature}
        summary={currently.summary}
        tempHigh={today.temperatureHigh}
        tempLow={today.temperatureLow} />
    );
  }
}

export default MainContainer;
