


// src/components/TopNavBar.jsx
import React from "react";
import "./topNavBar.css";
import TechLogo from '../../assets/images/TestLogo.png';
import HomeIcon from '../../assets/images/home_FILL0_wght300_GRAD0_opsz24.png';
import PatientIcon from '../../assets/images/group_FILL0_wght300_GRAD0_opsz24.png';
import CalendarIcon from '../../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.png';
import ChatIcon from '../../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.png';
import CreditIcon from '../../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.png';
import SeniorIcon from '../../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
import settingsIcon from '../../assets/images/settings_FILL0_wght300_GRAD0_opsz24.png';
import menuIcon from '../../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.png';

export default function TopNavBar() {
  return (
    <div className="NavBar">
        {/* nav left */}
        <div className="navbar-left">
            <img src={TechLogo} alt="Logo" />
        </div>
        {/* nav middle */}
        <div className="items">
            <div className="item">
                <img src={HomeIcon} alt="home" />
                <span>Overview</span>
            </div>
            <div className="item active" >
                <img src={PatientIcon} alt="home" />
                <span>Patients</span>
            </div>
            <div className="item">
                <img src={CalendarIcon} alt="home" />
                <span>Schedule</span>
            </div>
            <div className="item">
                <img src={ChatIcon} alt="home" />
                <span>Message</span>
            </div>
            <div className="item">
                <img src={CreditIcon} alt="home" />
                <span>Transactions</span>
            </div>
        </div>
        
        {/* nav right */}
        <div className="navbar-right">
            <img className="avatar" src={SeniorIcon} alt="doctorIcon" />
            <div className="user-info">
                <span>Dr. Jose Simmons</span>
                <span className="user-intro">General Practitioner</span>
            </div>
            <div>
                <img src={settingsIcon} alt="" className="icon settings-icon"/>
                <img src={menuIcon} alt="" className="icon"/>
            </div>
            
        </div>
    </div>
  );
}







// // src/components/TopNavBar.jsx
// import React from "react";
// import "./topNavBar.css";
// import TestLogo from '../../assets/images/TestLogo.png';
// import HomeIcon from '../../assets/images/home_FILL0_wght300_GRAD0_opsz24.png';
// import PatientIcon from '../../assets/images/group_FILL0_wght300_GRAD0_opsz24.png';
// import CalendarIcon from '../../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.png';
// import ChatIcon from '../../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.png';
// import CreditIcon from '../../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.png';
// import SeniorIcon from '../../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
// import settingsIcon from '../../assets/images/settings_FILL0_wght300_GRAD0_opsz24.png';
// import menuIcon from '../../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.png';

// export default function TopNavBar() {
//   return (
//     <div className="top-navbar">
//       {/* Logo */}
//       <div className="logo">
//       <img src={TestLogo} alt="Logo" className="logo-image" />
//       </div>

//       {/* Menu */}
//       <div className="menu">
//       <NavItem label="Overview" icon={<img src={HomeIcon} alt="Overview" className="nav-icon-img" />} />
//       <NavItem label="Patients" icon={<img src={PatientIcon} alt="Patients" className="nav-icon-img" />} active/>

//       <NavItem label="Schedule" icon={<img src={CalendarIcon} alt="Schedule" className="nav-icon-img" />} />
//       <NavItem label="Message" icon={<img src={ChatIcon} alt="Message" className="nav-icon-img" />} />
//       <NavItem label="Transactions" icon={<img src={CreditIcon} alt="Transactions" className="nav-icon-img" />} />


//       </div>

//       {/* Doctor info */}
//       <div className="doctor-info">
//       <img src={SeniorIcon} alt="Doctor" className="avatar" />
//          <div className="doctor-text">
//           <div className="doctor-name">Dr. Jose Simmons</div>
//           <div className="doctor-role">General Practitioner</div>
//         </div>
//         <img src={settingsIcon} alt="Settings" />
//         <img src={menuIcon} alt="More" />
//       </div>
//     </div>
//   );
// }

// function NavItem({ label, icon, active }) {
//   return (
//     <button className={`nav-item ${active ? "active" : ""}`}>
//       <span className="nav-icon">{icon}</span>
//       <span className="nav-label">{label}</span>
//     </button>
//   );
// }


