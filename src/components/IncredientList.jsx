import React from "react";
import Item from "./Item";

const IncredientList = ({ food, isLoading }) => {
  return (
    <div>
      {" "}
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
};

export default IncredientList;
