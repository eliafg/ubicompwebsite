import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Visualization = ({ data }) => {
    function transformDataByCompany(data) {
        const result = {};
        data.forEach(item => {
          if (!result[item.company]) {
            result[item.company] = 0;
          }
          result[item.company]++;
        });
        return Object.entries(result).map(([company, count]) => ({ company, count }));
      }
  const companyData = transformDataByCompany(data);

  return (
    <div>
        <h2>Incidents by Company</h2>
        <BarChart width={600} height={300} data={companyData}>
            <XAxis dataKey="company" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      
      <h2>All Incidents</h2>
            <table>
                <thead>
                    <tr>
                    <th>Company</th>
                    <th>Unit Number</th>
                    <th>Route</th>
                    <th>Passengers</th>
                    <th>Incident</th>
                    <th>Description</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(incident => (
                    <tr key={incident._id}>
                        <td>{incident.company}</td>
                        <td>{incident.unitNumber}</td>
                        <td>{incident.route}</td>
                        <td>{incident.passengers}</td>
                        <td>{incident.incident}</td>
                        <td>{incident.description}</td>
                        <td>{incident.time}</td>
                    </tr>
                    ))}
                </tbody>
        </table>
    </div>
  );
}

export default Visualization;