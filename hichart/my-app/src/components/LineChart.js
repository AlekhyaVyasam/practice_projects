import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import apiService from "../services/apiService";

const LineChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchChartData();
        setChartData(data); // Assuming the backend sends the data in the correct format
        setLoading(false);
      } catch (error) {
        console.error("Failed to load chart data.");
      }
    };
    fetchData();
  }, []);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Monthly Data",
    },
    xAxis: {
      categories: chartData.map((item) => item.name),
      title: {
        text: "Months",
      },
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        name: "Values",
        data: chartData.map((item) => item.value),
        color: "#1f77b4",
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
