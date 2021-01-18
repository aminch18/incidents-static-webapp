import { getAllIncidences, deleteIncident } from './services/incidencesService'
import Header from './components/Header';
import Incidences from './components/Incidences'
import CreateIncidence from './components/CreateIncidence'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [incidences, setIncidences] = useState([]);
  const [isIncidenceEdited, setIncidenceEdited] = useState(false);
  const [numberOfIncidences, setNumberOfIncidences] = useState(0)

  const fetchData = useRef(() => {});
  fetchData.current= () => {
    getAllIncidences()
    .then(allIncidences => {
      setIncidences(allIncidences)
      setNumberOfIncidences(allIncidences.length)
    });
  }

  useEffect(() => {
    fetchData.current();
  }, [fetchData, numberOfIncidences, isIncidenceEdited])

  const incidenceEdited = (data)  => setIncidenceEdited(data.isEdited);

  const incidenceCreated = (data) => setNumberOfIncidences(numberOfIncidences + 1)

  const deleteInc = (incidentId, workerId) => {
    deleteIncident(incidentId, workerId)
      .then(res => {
         setNumberOfIncidences(numberOfIncidences - 1);
      });
  }
  

  const status = {
    incidents: incidences,
    numIncidences: numberOfIncidences,
  }

  console.log(status);
  return (
    <div className="App">
      <Header/>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
              <CreateIncidence incidenceCreated={incidenceCreated}/>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Incidences incidences = {incidences} incidenceEdited = {incidenceEdited} deleteIncident = {deleteInc}/>
      </div>
    </div>
  );
}

export default App;