import { useState } from "react";
import raw from "../../mealdb.json";
import CardMeal from "../CardMeal/CardMeal";

export default function Navbar() {
  const [filteredMeals, setFilteredMeals] = useState(raw.meals);
  const [searchTerm, setSearchTerm] = useState("");

  const resultSearch = (evt) => {
    evt.preventDefault();
    setFilteredMeals(
      raw.meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <form onSubmit={resultSearch}>
      <label>
        <input
          type="search"
          name="Recherche"
          placeholder="Un ingrédient, un plat ..."
          id="idMeal"
          value={searchTerm}
          onChange={(evt) => {
            setSearchTerm(evt.target.value);
          }}
        />
      </label>
      <input type="submit" value="Rechercher" />
      {filteredMeals.map((filteredMeal) => {
        return <CardMeal key={filteredMeal.idMeal} mealData={filteredMeal} />;
      })}
    </form>
  );
}
