// import React from "react";
// //import "./vitalsCards.css";
// import HeartBPM from "../../assets/images/HeartBPM.png";
// import Temperature from "../../assets/images/temperature.png";
// import Respiratory from "../../assets/images/respiratory rate.png";

// export default function VitalsCards({ patient }) {
//   if (!patient) return null;

//   const sortedHistory = [...patient.diagnosis_history].sort((a, b) => {
//     const aDate = new Date(`${a.month} 1, ${a.year}`);
//     const bDate = new Date(`${b.month} 1, ${b.year}`);
//     return aDate - bDate;
//   });
//   const latest = sortedHistory.at(-1); 

//   return (
//     <div className="vitals-grid">
//       <div className="vital-card blue">
//         <div className="vital-content">
//           <div className="vital-icon">
//             <img src={Respiratory} alt="Respiratory" />
//           </div>
//           <div className="vital-label">Respiratory Rate</div>
//           <div className="vital-value">
//             {latest?.respiratory_rate?.value ?? "N/A"} bpm
//           </div>
//           <div className="vital-note">Normal</div>
//         </div>
//       </div>
//       <div className="vital-card pink">
//         <div className="vital-content">
//           <div className="vital-icon">
//             <img src={Temperature} alt="Temperature" />
//           </div>
//           <div className="vital-label">Temperature</div>
//           <div className="vital-value">
//             {latest?.temperature?.value ?? "N/A"} °F
//           </div>
//           <div className="vital-note">Normal</div>
//         </div>
//       </div>
//       <div className="vital-card purple">
//         <div className="vital-content">
//           <div className="vital-icon">
//             <img src={HeartBPM} alt="Heart Rate" />
//           </div>
//           <div className="vital-label">Heart Rate</div>
//           <div className="vital-value">
//             {latest?.heart_rate?.value ?? "N/A"} bpm
//           </div>
//           <div className="vital-note">Lower than Average</div>
//         </div>
//       </div>
//     </div>
//   );
// }
