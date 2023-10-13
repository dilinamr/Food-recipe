import React from "react";
import style from "./Container.module.css";
const Container = ({ children }) => {
  return <div className={style.parentcontainer}>{children}</div>;
};

export default Container;
