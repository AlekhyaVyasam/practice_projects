// TemperatureChart.js
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Temperature data (example)
const temperatureData = [
  ['2025-01-01', 22],
  ['2025-01-02', 24],
  ['2025-01-03', 19],
  ['2025-01-04', 17],
  ['2025-01-05', 23],
  ['2025-01-06', 21],
  ['2025-01-07', 25],
  ['2025-01-08', 27],
  ['2025-01-09', 30],
  ['2025-01-10', 32],
  ['2025-01-11', 33],
  ['2025-01-12', 40],
  ['2025-01-13', 45],
  ['2025-01-14', 55],
  ['2025-01-15', 60]
];

const TemperatureChart = () => {
  // Chart configuration
  const options = {
    chart: {
      type: 'line', // Use line chart for temperature
    },
    title: {
      text: 'Temperature Over Time',
    },
    xAxis: {
      type: 'datetime', // x-axis will represent the date
      title: {
        text: 'Date',
      },
      labels: {
        format: '{value:%Y-%m-%d}', // Format the date labels
      },
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)',
      },
      min: 0, // Minimum temperature value
    },
    series: [
      {
        name: 'Temperature',
        data: temperatureData.map(item => [
          new Date(item[0]).getTime(), // Convert date to timestamp
          item[1],
        ]),
        tooltip: {
          valueSuffix: ' °C',
        },
      },
    ],
    credits: {
      enabled: false,
    }
  };

  return (
    <div id = "temperature-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TemperatureChart;
