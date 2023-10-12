import React from "react";

export const FoodList = ({ fooddata }) => {
  return (
    <div>
      {fooddata.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
};
