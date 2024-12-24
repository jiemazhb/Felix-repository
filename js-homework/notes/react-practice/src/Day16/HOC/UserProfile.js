import React from "react";

function UserProfile({ name, age }) {
  
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", border: "1px solid #ddd" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserProfile;
