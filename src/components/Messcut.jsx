import React, { useState, useEffect } from "react";
import "./Messcut.css";

const Messcut = () => {
  const [isMesscut, setIsMesscut] = useState(localStorage.getItem("isMesscut") === "true" || false);
  const [fromDate, setFromDate] = useState(localStorage.getItem("fromDate") || "");
  const [toDate, setToDate] = useState(localStorage.getItem("toDate") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMesscut) {
      alert(`Messcut applied from ${fromDate} to ${toDate}`);

    } else {
      alert("No messcut applied.");
    }
    // Save to localStorage
    localStorage.setItem("isMesscut", isMesscut);
    localStorage.setItem("fromDate", fromDate);
    localStorage.setItem("toDate", toDate);
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