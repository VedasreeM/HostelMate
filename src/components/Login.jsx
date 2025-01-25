// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [admissionNo, setAdmissionNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (admissionNo && password) {
      // Add authentication logic here
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h1>HostelMate</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Admission Number"
          value={admissionNo}
          onChange={(e) => setAdmissionNo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
