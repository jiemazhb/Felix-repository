import React from "react";
import "./patientDetails.css";

// 图标路径
import BirthIcon from "../../assets/images/BirthIcon.png";
import genderIcon from "../../assets/images/FemaleIcon.png";
import phoneIcon from "../../assets/images/PhoneIcon.png";
import insuranceIcon from "../../assets/images/InsuranceIcon.png";

export default function PatientDetails() {


  return (
    <div className="patient-card">
        ddd
    </div>
  );
}






// import React from "react";
// import "./patientDetails.css";

// // 图标路径
// import BirthIcon from "../../assets/images/BirthIcon.png";
// import genderIcon from "../../assets/images/FemaleIcon.png";
// import phoneIcon from "../../assets/images/PhoneIcon.png";
// import insuranceIcon from "../../assets/images/InsuranceIcon.png";

// export default function PatientDetails({ patient }) {
//   if (!patient) {
//     return <div className="patient-loading">Loading patient details...</div>;
//   }

//   return (
//     <div className="patient-card">
//       <img
//         src={patient.profile_picture}
//         alt={patient.name}
//         className="patient-avatar"
//       />
//       <h3 className="card-title-24pt">{patient.name}</h3>

//       <div className="patient-info-list">
//         <InfoRow icon={BirthIcon} label="Date Of Birth" value={patient.date_of_birth} />
//         <InfoRow icon={genderIcon} label="Gender" value={patient.gender} />
//         <InfoRow icon={phoneIcon} label="Contact Info." value={patient.phone_number} />
//         <InfoRow icon={phoneIcon} label="Emergency Contacts" value={patient.emergency_contact} />
//         <InfoRow icon={insuranceIcon} label="Insurance Provider" value={patient.insurance_type} />
//       </div>

//       <button className="info-button">
//         <span className="body-emphasized-14pt">Show All Information</span>
//       </button>
//     </div>
//   );
// }

// function InfoRow({ icon, label, value }) {
//   return (
//     <div className="info-row">
//       <img src={icon} className="icon-img" alt={label} />
//       <div className="info-text">
//         <div className="body-regular-14">{label}</div>
//         <div className="body-emphasized-14pt">{value}</div>
//       </div>
//     </div>
//   );
// }
