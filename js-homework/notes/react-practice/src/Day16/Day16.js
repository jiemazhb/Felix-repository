import React from "react";
import LoginForm from "./LoginForm";
import UsageOfCustumHooks from "./CustumHooks/UsageOfCustumHooks";
import WithLoading from "./HOC/WithLoading";
import UserProfile from "./HOC/UserProfile";

export default function Day16() {

  const EnhancedUserProfile = WithLoading(UserProfile);
  
  return (
    <>
      <h1>Login form</h1>
      <LoginForm />

      <h1>custum hooks</h1>
      <UsageOfCustumHooks />
      
      <h1>H O C</h1>
      <div style={{ padding: "20px" }}>
        <EnhancedUserProfile name="Alice" age={25} />
      </div>
    </>
  );
}
