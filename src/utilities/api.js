import axios from 'axios';
import Chart from 'chart.js';

export function drawChart(ctx, config) {
  return new Chart(ctx, config)
}

export function fetchWeather(url) {
  return axios.get(url)
}
