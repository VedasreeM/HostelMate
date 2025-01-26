// src/components/Login.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axiosapi from "../api/api";
import background from "../assets/bg1.jpg"; // Import the background image

const Login = () => {
  useEffect(() => {
    axiosapi
      .get("/")
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    <div
      className="login-container"
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
      <div className="login-box">
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
    </div>
  );
};

export default Login;
