import React, { useEffect, useState } from "react";
const FoodDetail = ({ foodid }) => {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;

  const API_KEY = "4da6f6e9cc87470994d5494179eb3228";
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
    }
    fetchfood();
  }, [foodid]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="img" />
        <div>
          <span>
            <strong>🕓 : {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>serves : {food.servings} persons</strong>
          </span>
          <span>{food.vegetarian ? "🥕 VEGETARIAN" : "🥩 NON-VEGETARIAN"}</span>
        </div>
        <div>
          <span>{food.pricePerServing} rs per serving</span>
        </div>
      </div>
      <div>
        <h2>instructions</h2>
        {food.analyzedInstructions[0].steps.map((step) => (
          <li>{step.step}</li>
        ))}
      </div>
    </div>
  );
};

export default FoodDetail;
