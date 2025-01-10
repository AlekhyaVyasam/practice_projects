import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  // Define the chart options
  const options = {
    chart: {
      type: 'column',  // Create a bar chart
    },
    title: {
      text: 'Sensor Distribution',  // Title of the chart
    },
    xAxis: {
      categories: ['Temperature Sensor', 'Humidity Sensor'],  // Categories for Corn and Wheat
      title: {
        text: 'Sensor',  // X-axis title
      },
    },
    yAxis: {
      title: {
        text: 'Count',  // Y-axis title
      },
      min: 0,  // Set minimum value for Y-axis to 0
    },
    series: [
      {
        name: 'Sensor',
        data: [12, 10],  // Production data for Corn and Wheat
        color: '#7cb5ec',  // Optional: Blue color for the bars
      },
    ],
    credits: {
        enabled: false,
      },
    plotOptions: {
      bar: {
        borderWidth: 0,  // No border for the bars
      },
    },
    tooltip: {
      pointFormat: '{point.y}',  // Display the value in tooltip
    },
  };
  

  return (
    <div id="barchart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
