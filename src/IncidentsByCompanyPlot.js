import { Bar } from 'react-chartjs-2';

function IncidentsByCompanyPlot({ data }) {
  // This is a simplified transformation function. 
  // You might need to expand upon this for more intricate data handling.
  const transformedData = data.reduce((acc, incident) => {
    if (!acc[incident.company]) {
      acc[incident.company] = 1;
    } else {
      acc[incident.company] += 1;
    }
    return acc;
  }, {});

  const companies = Object.keys(transformedData);
  const incidentsCounts = Object.values(transformedData);

  const chartData = {
    labels: companies,
    datasets: [
      {
        label: '# of Incidents',
        data: incidentsCounts,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)'
      }
    ]
  };

  return <Bar data={chartData} />;
}