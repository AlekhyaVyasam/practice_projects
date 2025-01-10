import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import TemperatureChart from './TemperatureChart';
import BarChart from './BarChart';
import './Dashboard.css';
import Table from './Table';
import TemperatureHumidityChart from './TemperatureHumidityChart';

const Dashboard: React.FC = () => {
  const handleDownload = async (widgetName: string) => {
    try {
      let apiUrl = '';

      // Determine which API to call based on the widget name
      if (widgetName === 'Table Data') {
        apiUrl = 'http://localhost:8082/api/snapshot/capture';
      } else if (widgetName === 'Temperature Trends') {
        apiUrl = 'http://localhost:8082/api/screenshot/capture';
      } else {
        alert(`Download for ${widgetName} is not implemented.`);
        return;
      }

      // Make API call
      const response = await axios.get(apiUrl, {
        responseType: 'blob', // Important for binary data
      });

      // Create a blob URL and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;

      // Set the filename based on the widget name
      const fileName = `${widgetName.replace(' ', '-').toLowerCase()}.pdf`;
      link.setAttribute('download', fileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(`Error downloading ${widgetName} PDF:`, error);
      alert(`Failed to download the ${widgetName} PDF.`);
    }
  };

  return (
    <div className="dashboard">
      <h1>Sensor Dashboard</h1>
      <div className="card-container">
        {/* Widget Card for Temperature Chart */}
        <div className="widget-card">
          <h2>
            Temperature Trends
            <FontAwesomeIcon
              icon={faDownload}
              className="download-icon"
              onClick={() => handleDownload('Temperature Trends')}
              title="Download"
            />
          </h2>
          <TemperatureChart />
        </div>

        {/* Widget Card for Sensor Distribution */}
        <div className="widget-card">
          <h2>
            Sensor Distribution
            <FontAwesomeIcon
              icon={faDownload}
              className="download-icon"
              onClick={() => handleDownload('Sensor Distribution')}
              title="Download"
            />
          </h2>
          <BarChart />
        </div>

        {/* Widget Card for Table Data */}
        <div className="widget-card">
          <h2>
            Table Data
            <FontAwesomeIcon
              icon={faDownload}
              className="download-icon"
              onClick={() => handleDownload('Table Data')}
              title="Download"
            />
          </h2>
          <Table />
        </div>

        {/* Widget Card for Multiple Y-axis */}
        <div className="widget-card">
          <h2>
            Multiple Y-axis
            <FontAwesomeIcon
              icon={faDownload}
              className="download-icon"
              onClick={() => handleDownload('Multiple Y-axis')}
              title="Download"
            />
          </h2>
          <TemperatureHumidityChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
