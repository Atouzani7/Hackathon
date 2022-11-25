import { useState, useEffect } from "react";
import "./random.css";
import axios from "axios";

export default function Category() {
  const [randomMeals, setRandomMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(({ data }) => {
        setRandomMeals(data.strInstructions || []);
      });
  }, []);

  return (
    <div>
      <ul>
        {randomMeals.map(([toto]) => {
          return <p key={toto.strInstructions}> {setRandomMeals} </p>;
        })}
      </ul>
    </div>
  );
}
