// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import background from "../assets/bg1.jpg"; // Import the background image

const Signup = () => {
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Add registration logic here
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="signup-box">
        <h1>HostelMate</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
