// src/components/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header>
        <h1>HostelMate</h1>
        
      </header>
      <div className="dashboard-buttons">
        <div>
          <button onClick={() => navigate("/menu")}>Menu</button>
        </div>
        <div>
          <button onClick={() => navigate("/messcut")}>Messcut</button>
        </div>
        <div>
          <button onClick={() => navigate("/preferences")}>Meal Preferences</button>
        </div>
        <div>
          <button onClick={() => navigate("/feedback")}>Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
