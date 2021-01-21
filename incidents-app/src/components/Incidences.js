import React from 'react';
import EditIncidenceModal from './EditIncidenceModal';
import Table from 'react-bootstrap/Table';

const Incidences = ({ incidences, incidenceEdited, deleteIncident }) => {

    const IncidenceRow = (incidence, index) => {

        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{incidence.IncidentId}</td>
                <td>{incidence.Priority}</td>
                <td>{incidence.CreatedBy}</td>
                <td>{incidence.FirstAssignementGroup}</td>
                <td>{incidence.CreatedDateTime}</td>
                <td>{incidence.AssignedTo}</td>
                <td>{incidence.Country}</td>
                <td>
                    <div className="row">
                        <div className="col-md-8">
                            {incidence.State}
                        </div>
                    </div>
                </td>
                <td>                        
                    <div className="col-md-8">
                        <EditIncidenceModal incidence={incidence} incidenceEdited={incidenceEdited} />
                    </div>
                    <div className="col-md-6">
                        <button type="button" onClick={(e) => deleteIncident(incidence.id, incidence.IncidentId)} className="btn btn-danger right">Delete</button>
                    </div>
                </td>
            </tr>
        )
    }

    const tableBody = incidences.map((incidence, index) => IncidenceRow(incidence, index));
    return (
        <div className="container">
            <Table striped responsive="lg">
                <thead>
                    <tr>
                        <th>Incident Number</th>
                        <th>Priority</th>
                        <th>CreatedBy</th>
                        <th>Assignement Group</th>
                        <th>Creation date</th>
                        <th>AssignedTo</th>
                        <th>Country</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </Table>
        </div>
    )
}

export default Incidences;