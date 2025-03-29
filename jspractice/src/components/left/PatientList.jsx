import React from "react";
import "./patientList.css";
import SearchIcon from "../../assets/images/search_FILL0_wght300_GRAD0_opsz24.png"; 

const PatientList = ({patients}) => {

  console.log(patients,"ee");
    

  return (
      <ul className="patient-list">
        {patients? (
          patients.map((p) => {
            return (
              <li className="patient">
                <img className="patient-avatar" src={p.profile_picture} alt="" />
                <div>
                  <span>{p.name}</span>
                  {p.gender}, {p.age}
                </div>
                <span>...</span>
              </li>
            )
          })
        ) : (<div>loading...</div>)}
      </ul>
  );
};

export default PatientList;



// import React from "react";
// import "./patientList.css";
// import SearchIcon from "../../assets/images/search_FILL0_wght300_GRAD0_opsz24.png"; 

// const PatientList = ({ patients, selected, onSelect }) => {
//   return (
//     <div className="patient-list">
//       <div className="patient-list-header">
//         <h3 className="patient-list-title">Patients</h3>
//         <img src={SearchIcon} alt="Search" className="search-icon" />
//       </div>

//       <ul className="patient-items">
//         {patients.map((patient) => (
//           <li
//             key={patient.name}
//             className={`patient-item ${selected?.name === patient.name ? "active" : ""}`}
//             onClick={() => onSelect(patient.name)}
//           >
//             <div className="left">
//               <img src={patient.profile_picture} alt={patient.name} className="avatar" />
//               <div className="patient-info">
//                 <div className="patient-name">{patient.name}</div>
//                 <div className="patient-meta">
//                   {patient.gender}, {patient.age}
//                 </div>
//               </div>
//             </div>
//             <button className="more-button">...</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PatientList;
