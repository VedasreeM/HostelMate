import React, { useState, useEffect } from "react";
import "./Preferences.css";

const Preferences = () => {
  const [preference, setPreference] = useState(localStorage.getItem("preference") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Preference saved: ${preference}`);

    // Save to localStorage
    localStorage.setItem("preference", preference);
  };

  return (
    <div className="preferences-container">
      <h1>Meal Preferences</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select your preference:
          <select value={preference} onChange={(e) => setPreference(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Eggetarian">Eggetarian</option>
          </select>
        </label>
        <button type="submit">Save Preference</button>
      </form>
    </div>
  );
};

export default Preferences;