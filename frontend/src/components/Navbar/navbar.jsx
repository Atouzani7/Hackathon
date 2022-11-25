import { useState } from "react";
import "./navbar.css";
import CardPays from "@components/CardPays/CardPays";
import raw from "../../mealdb.json";

export default function Navbar() {
  const [filteredMeals, setFilteredMeals] = useState([]);
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
      <input
        type="submit"
        value="Rechercher"
        onClick={resultSearch}
        className="button"
      />
      <ul>
        <ul>
          {filteredMeals.map((meal) => {
            return <li key={meal.strMeal}>{meal.strMeal}</li>;
          })}
        </ul>
        <CardPays />
      </ul>
    </form>
  );
}
