// import React from "react";
// import "./labResults.css";
// import downloadIcon from "../../assets/images/download_FILL0_wght300_GRAD0_opsz24 (1).png";

// export default function LabResults({ patient }) {
//   if (!patient) return null;

//   const result = patient.lab_results || [];

//   return (
//     <div className="lab-card">
//       <div className="lab-content">
//         <h3 className="lab-title">Lab Results</h3>
//         <ul className="lab-list">
//           {result.map((item, index) => (
//             <li className="lab-item" key={index}>
//               <span className="lab-text">{item}</span>
//               <button className="download-btn" title="Download">
//                 <img src={downloadIcon} alt="Download" />
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
