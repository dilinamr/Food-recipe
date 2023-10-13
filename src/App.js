import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { FoodList } from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [fooddata, setfooddata] = useState([]);
  const [foodid, setfoodid] = useState("");
  return (
    <div className="app">
      <Nav />
      <Search fooddata={fooddata} setfooddata={setfooddata} />
      <Container>
        <InnerContainer>
          <FoodList fooddata={fooddata} setfoodid={setfoodid} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodid={foodid} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
