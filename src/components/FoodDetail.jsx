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
    }
    fetchfood();
  }, [foodid]);
  return (
    <div>
      FoodDetail:{foodid}
      <h3>{food.title}</h3>
      <img src={food.image} alt="img" />
    </div>
  );
};

export default FoodDetail;
