import React from "react";
import FoodItem from "./FoodItem";

export const FoodList = ({ fooddata }) => {
  return (
    <div>
      {fooddata.map((food) => (
        <FoodItem food={food} key={food.id} />
      ))}
    </div>
  );
};
