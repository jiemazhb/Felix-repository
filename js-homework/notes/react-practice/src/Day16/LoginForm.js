import React, { useRef, useEffect } from "react";

function LoginForm() {
  const usernameRef = useRef(null); 

  useEffect(() => { 
    usernameRef.current.focus(); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${usernameRef.current.value}`);
  };

  return (
    <div style={{ margin: "50px", fontFamily: "Arial" }}>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" ref={usernameRef} placeholder="Enter your username" style={{ marginLeft: "10px", padding: "5px" }}/>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder="Enter your password" style={{ marginLeft: "10px", padding: "5px" }}/>
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>

      </form>

    </div>
  );
}

export default LoginForm;
