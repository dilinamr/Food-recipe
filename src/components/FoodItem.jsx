import React from "react";
import style from "../components/FoodItem.module.css";
const FoodItem = ({ food, setfoodid }) => {
  return (
    <div className={style.itemcontainer}>
      <img className={style.itemimg} src={food.image} alt="Foodimage" />
      <div className={style.itemcontent}>
        <p className={style.itemname} key={food.id}>
          {food.title}
        </p>
      </div>
      <div className={style.btncontainer}>
        <button
          onClick={() => {
            setfoodid(food.id);
          }}
          className={style.btn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
