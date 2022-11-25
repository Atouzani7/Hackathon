import "./CardMeal.css";
import { useState } from "react";
import { meals } from "../../mealdb.json";

function CardMeal() {
  const [mealDatas, setMealDatas] = useState(meals);

  return mealDatas.map((mealData) => {
    return (
      <div key={mealData.idMeal}>
        <div className="container" />
        <div className="card">
          <img
            className="card-image car-1"
            src={mealData.strMealThumb}
            alt={mealData.strMealThumb}
          />
          <div>
            <h2>{mealData.strMeal}</h2>
            <h3>{mealData.strArea}</h3>
            <h3>{mealData.strCategory}</h3>
          </div>
        </div>
      </div>
    );
  });
}

export default CardMeal;
