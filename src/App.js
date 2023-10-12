import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { FoodList } from "./components/FoodList";

function App() {
  const [fooddata, setfooddata] = useState([]);
  return (
    <div className="app">
      <Search fooddata={fooddata} setfooddata={setfooddata} />
      <FoodList fooddata={fooddata} />
    </div>
  );
}

export default App;
