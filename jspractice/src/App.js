import React from "react";
import TopNavBar from "./components/topNavBar/TopNavBar";
import PatientList from "./components/left/PatientList";
import PatientDetails from "./components/right/PatientDetails";
import DiagnosisChart from "./components/middle/DiagnosisChart";
import LabResults from "./components/right/LabResults";
import DiagnosticList from "./components/middle/DiagnosticList";
import usePatientData from "./components/usePatientData";
import './App.css'

export default function App() {
  const { patients, selectedPatient, onSelect, onSelectedPatient } = usePatientData();


  return (
    <div>
      <TopNavBar/>
      <div className="dashboard-content">
        <PatientList patients={patients}/>
        <DiagnosisChart/>
        <PatientDetails/>
        
      </div>
    </div>
  );
}
