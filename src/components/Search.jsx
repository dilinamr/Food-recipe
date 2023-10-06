import React, { useEffect, useState } from "react";
const URl = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "4da6f6e9cc87470994d5494179eb3228";
export const Search = ({fooddata,setfooddata}) => {
  const [query, setquery] = useState("pasta");
  useEffect(() => {
    async function fetchapi() {
      const res = await fetch(`${URl}?${query}&apiKey=${API_KEY}`);
      const data = await res.json();

      console.log(data.results);
      setfooddata(data.results);
      
    }

    fetchapi();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="enter the food name.."
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      {console.log(query)}
    </div>
  );
};
