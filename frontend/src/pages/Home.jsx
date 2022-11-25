import CardMeal from "@components/CardMeal/CardMeal";
import React from "react";

const sample = {
  strMealThumb: "",
  strMeal: "Toto",
  strCategory: "Grophat",
  strArea: "World",
  idMeal: "42",
};

function Home() {
  return (
    <div>
      <CardMeal mealData={sample} />
    </div>
  );
}

export default Home;
