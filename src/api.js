import axios from 'axios';

export default {
  fetchWeather: (url) => (axios.get(url))
};
