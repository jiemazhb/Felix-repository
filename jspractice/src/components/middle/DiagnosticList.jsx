// import React from "react";
// import "./diagnosticList.css";

// export default function DiagnosticList({ patient }) {
//   if (!patient || !patient.diagnostic_list) return null;

//   const diagnosisList = patient.diagnostic_list;

//   return (
//     <div className="diagnostic-card">
//       <h3 className="section-title">Diagnostic List</h3>
//       <div className="table-wrapper">
//         <table className="diagnostic-table">
//           <thead>
//             <tr>
//               <th>Problem/Diagnosis</th>
//               <th>Description</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {diagnosisList.map((item, idx) => (
//               <tr key={idx}>
//                 <td>{item.name}</td>
//                 <td>{item.description}</td>
//                 <td>{item.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

