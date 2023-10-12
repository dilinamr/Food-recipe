import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { FoodList } from "./components/FoodList";
import Nav from "./components/Nav";

function App() {
  const [fooddata, setfooddata] = useState([]);
  return (
    <div className="app">
      <Nav />
      <Search fooddata={fooddata} setfooddata={setfooddata} />
      <FoodList fooddata={fooddata} />
    </div>
  );
}

export default App;
