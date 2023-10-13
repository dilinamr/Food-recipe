import React from "react";
import style from "./InnerContainer.module.css";
const InnerContainer = ({ children }) => {
  return <div className={style.InnerContainer}>{children}</div>;
};

export default InnerContainer;
