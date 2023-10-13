import React from "react";
import FoodItem from "./FoodItem";

export const FoodList = ({ fooddata, setfoodid }) => {
  return (
    <div>
      {fooddata.map((food) => (
        <FoodItem setfoodid={setfoodid} food={food} key={food.id} />
      ))}
    </div>
  );
};
