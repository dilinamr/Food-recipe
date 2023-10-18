import React from "react";

const IncredientList = ({ food, isLoading }) => {
  return (
    <div>
      {" "}
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div key={item.id}>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt="incredients"
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount}
              {item.unit}
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

export default IncredientList;
