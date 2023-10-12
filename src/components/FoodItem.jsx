import React from "react";

const FoodItem = ({ food }) => {
  return (
    <div>
      <img src={food.image} alt="Foodimage" />
      <h1 key={food.id}>{food.title}</h1>
    </div>
  );
};

export default FoodItem;
