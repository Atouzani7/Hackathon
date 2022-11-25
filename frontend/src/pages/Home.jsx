import CardMeal from "@components/CardMeal/CardMeal";
import { meals } from "../mealdb.json";

function Home() {
  return (
    <div>
      {meals.map((meal) => {
        return <CardMeal mealData={meal} />;
      })}
    </div>
  );
}

export default Home;
