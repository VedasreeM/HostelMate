import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted with rating: ${rating} stars\nSuggestion: ${suggestion}`);
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Rate us: 
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  cursor: "pointer",
                  color: star <= rating ? "gold" : "gray",
                  fontSize: "24px",
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </label>
        <br />
        <label>
          Suggestion:
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Enter your feedback here..."
            rows="4"
            cols="50"
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
