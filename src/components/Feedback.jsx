import { useState } from "react";
import './Feedback.css'

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleRating = (value) => {
    setRating(value);
    setFeedbackMessage("You rated ${value} stars. Thank you for your feedback!");
  };

  const clearFeedback = () => {
    setRating(0);
    setFeedbackMessage("");
  };

  return (
    <div className="container">
      <h2>Give Your Feedback</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= (hover || rating) ? "selected" : "unselected"}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color: star <= (hover || rating) ? "gold" : "gray",
              transition: "color 0.2s ease-in-out",
            }}
          >
            ★
          </span>
        ))}
      </div>
      {feedbackMessage && <p>{feedbackMessage}</p>}
      {rating > 0 && (
        <button onClick={clearFeedback} style={{ marginTop: "10px", cursor: "pointer" }}>
          Clear Feedback
        </button>
      )}
    </div>
  );
};

export default Feedback;