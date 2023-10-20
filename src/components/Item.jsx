import React from "react";
import style from "../components/item.module.css";

const Item = ({ item }) => {
  return (
    <div className={style.itemContainer}>
      {" "}
      <div key={item.id} className={style.imageContainer}>
        <img
          className={style.img}
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          alt="incredients"
        />
      </div>
      <div className={style.nameContainer}>
        <div className={style.name}>{item.name}</div>
        <div className={style.amount}>
          {item.amount}
          {item.unit}
        </div>
      </div>
    </div>
  );
};

export default Item;
