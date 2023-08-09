import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Visualization from './Visualization';

function App() {
    const [jsonData, setJsonData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching data from the server using axios
        axios.get('https://ubicomp-e-server.onrender.com/incidentes')
            .then(response => {
                setJsonData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="App">
            <h1>Data Visualization</h1>
            <Visualization data={jsonData} />
        </div>
    );
}

export default App;