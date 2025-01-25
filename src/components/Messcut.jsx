// src/components/Messcut.js
import React, { useState } from "react";
import "./Messcut.css";

const Messcut = () => {
  const [isMesscut, setIsMesscut] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMesscut) {
      alert(`Messcut applied from ${fromDate} to ${toDate}`);
    } else {
      alert("No messcut applied.");
    }
  };

  return (
    <div className="messcut-container">
      <h1>Messcut</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Messcut? 
          <select value={isMesscut} onChange={(e) => setIsMesscut(e.target.value === "true")}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>
        {isMesscut && (
          <>
            <label>
              From: <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </label>
            <label>
              To: <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </label>
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Messcut;
