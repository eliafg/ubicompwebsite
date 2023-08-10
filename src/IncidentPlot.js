import React from 'react';
import Plot from 'react-plotly.js';
import './IncidentPlot.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function IncidentPlot(props) {
    // Sample data from your example
    const data = props.data;

    const incidentsByType = data.reduce((acc, curr) => {
        acc[curr.incident] = (acc[curr.incident] || 0) + 1;
        return acc;
    }, {});

    const incidentsByCompany = data.reduce((acc, curr) => {
        acc[curr.company] = (acc[curr.company] || 0) + 1;
        return acc;
    }, {});

    const totalIncidents = data.length;

    return (

        <Container>
    <Row className="align-items-center">
        <Col xs={12} className="text-center">
            <div className="total-incidents">
                <h3>Incidentes Totales</h3>
                <p>{totalIncidents}</p>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center"> {/* Center plots horizontally */}
        <Col xs={12} md={6}>
            <div className="plot-container">
                <Plot
                    data={[
                        {
                            labels: Object.keys(incidentsByType),
                            values: Object.values(incidentsByType),
                            type: 'pie',
                            name: 'Incidentes por tipo',
                        }
                    ]}
                    layout={{ width: "100%", height: "100%", title: 'Incidentes por tipo', plot_bgcolor:"black",
                    paper_bgcolor:"#FFF3", font:{color:"white"}}}
                    responsive={true}
                />
            </div>
        </Col>
        <Col xs={12} md={6}>
            <div className="plot-container2">
                <Plot
                    data={[
                        {
                            labels: Object.keys(incidentsByCompany),
                            values: Object.values(incidentsByCompany),
                            type: 'pie',
                            name: 'Incidentes por compañía',
                        }
                    ]}
                    layout={{ width: "100%", height: "100%", title: 'Incidentes por compañía',plot_bgcolor:"black",
                    paper_bgcolor:"#FFF3",font:{color:"white"}}}
                    responsive={true}
                />
            </div>
        </Col>
    </Row>
</Container>
    );
}

export default IncidentPlot;