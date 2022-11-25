import { useState } from "react";
import "./navbar.css";
import raw from "../../mealdb.json";

export default function Navbar() {
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const resultSearch = (evt) => {
    evt.preventDefault();

    if (searchTerm === "") return setFilteredMeals([]);

    return setFilteredMeals(
      raw.meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <form onSubmit={resultSearch} className="NavBar">
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
      <input
        type="submit"
        value="Rechercher"
        onClick={resultSearch}
        className="button"
      />
      {filteredMeals.length && (
        <ul>
          {filteredMeals.map((meal) => {
            return (
              <li key={meal.strMeal}>
                <img className="thumb" src={meal.strMealThumb} alt={meal.strMeal} />
                {meal.strMeal}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}
