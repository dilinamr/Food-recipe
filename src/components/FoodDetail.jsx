import React, { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
const FoodDetail = ({ foodid }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;

  const API_KEY = "4da6f6e9cc87470994d5494179eb3228";
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
      console.log(data);
    }
    fetchfood();
  }, [foodid]);
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}>{food.title}</h1>
        <div className={styles.imgcontainer}>
          <img className={styles.recipeimage} src={food.image} alt="img" />
        </div>
        <div className={styles.recipedetails}>
          <span>
            <strong>🕓 : {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>serves : {food.servings} persons</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 VEGETARIAN" : "🥩 NON-VEGETARIAN"}
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>{food.pricePerServing} rs per serving</strong>
          </span>
        </div>

        <h2>instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading.....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
