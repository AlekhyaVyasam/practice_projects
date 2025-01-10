import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TemperatureHumidityChart = () => {
  const options = {
    chart: {
      type: 'line', // Set the chart type
    },
    title: {
      text: 'Temperature and Humidity Over Time',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example months
    },
    yAxis: [
      {
        // Primary Y Axis (Temperature)
        title: {
          text: 'Temperature (°C)',
        },
        opposite: false, // Position it on the left side
      },
      {
        // Secondary Y Axis (Humidity)
        title: {
          text: 'Humidity (%)',
        },
        opposite: true, // Position it on the right side
      },
    ],
    series: [
      {
        name: 'Temperature',
        type: 'line', // Line chart for temperature
        data: [5, 8, 12, 15, 18, 20, 22], // Example temperature data
        yAxis: 0, // Use the first Y Axis for temperature
      },
      {
        name: 'Humidity',
        type: 'line', // Line chart for humidity
        data: [80, 75, 70, 65, 60, 55, 50], // Example humidity data
        yAxis: 1, // Use the second Y Axis for humidity
      },
    ],
    credits: {
        enabled: false,
      },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TemperatureHumidityChart;
