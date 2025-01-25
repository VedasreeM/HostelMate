import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [showDetails, setShowDetails] = useState(false);

  const user = {
    name: "John Doe",
    admissionNumber: "123456",
    roomNumber: "B-204",
    foodPreference: "Veg",
  };

  const handleProfileClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150" // Replace with profile picture URL
          alt="Profile"
          className="profile-pic"
          onClick={handleProfileClick}
        />
        {showDetails && (
          <div className="profile-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Admission Number:</strong> {user.admissionNumber}</p>
            <p><strong>Room Number:</strong> {user.roomNumber}</p>
            <p><strong>Food Preference:</strong> {user.foodPreference}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
