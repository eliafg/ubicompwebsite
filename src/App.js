import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import IncidentPlot from './IncidentPlot';
import { Table } from 'react-bootstrap';
import './dark-theme.css'; // Import your custom dark theme styles

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    function IncidentsTable({ data }) {
      console.log(data);
      return (
        <Table striped bordered hover responsive className='table'>
          <thead>
            <tr>
              <th>Compañía</th>
              <th>Número de Unidad</th>
              <th>Ruta</th>
              <th># de Pasajeros</th>
              <th>Tipo de Incidente</th>
              <th>Descripción</th>
              <th>Fecha y Hora del Incidente</th>
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
        </Table>
      );
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ubicomp-e-server.onrender.com/recent');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };

        fetchData();
        setLoading(false);

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Visualización de los datos sobre los incidentes</h1>
            <IncidentPlot data={data} />
            <IncidentsTable data={data} />
        </div>
    );
}

export default App;