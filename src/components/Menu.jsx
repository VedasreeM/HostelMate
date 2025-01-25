// src/components/Menu.js
import React from "react";
import "./Menu.css";

const Menu = () => {
  const menu = {
    Monday: { breakfast: "Idli & Sambar", lunch: "Rice & Curry", dinner: "Chapati & Dal" },
    Tuesday: { breakfast: "Poha", lunch: "Biryani", dinner: "Roti & Paneer" },
    Wednesday: { breakfast: "Dosa", lunch: "Fried Rice", dinner: "Veg Pulao" },
    Thursday: { breakfast: "Upma", lunch: "Dal & Rice", dinner: "Pasta" },
    Friday: { breakfast: "Paratha", lunch: "Rajma Chawal", dinner: "Pizza" },
    Saturday: { breakfast: "Sandwich", lunch: "Noodles", dinner: "Burger" },
    Sunday: { breakfast: "Puri Bhaji", lunch: "Special Thali", dinner: "Biryani" },
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      {Object.keys(menu).map((day) => (
        <div key={day} className="menu-day">
          <h2>{day}</h2>
          <p>Breakfast: {menu[day].breakfast}</p>
          <p>Lunch: {menu[day].lunch}</p>
          <p>Dinner: {menu[day].dinner}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
