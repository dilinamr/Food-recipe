import React from "react";
import burger from "../burger.jpg";
const Nav = () => {
  return (
    <div className="navbar-main">
      <div>
        <img className="navbar-img" src={burger} alt="logo" />
      </div>

      <div>
        <h1 className="navbar-title">FOOD COURT</h1>
      </div>
    </div>
  );
};

export default Nav;
