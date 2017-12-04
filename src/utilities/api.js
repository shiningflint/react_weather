import axios from 'axios';
import Chart from 'chart.js';

export default {
  fetchWeather: (url) => (axios.get(url)),
  drawChart: (ctx, config) => (new Chart(ctx, config)),
};
