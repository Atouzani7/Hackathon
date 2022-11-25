import "./CardMeal.css";
import PropTypes from "prop-types";

function CardMeal({ mealData }) {
  return (
    <div key={mealData.idMeal}>
      <div className="container-2" />
      <div className="card-1">
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
}

CardMeal.propTypes = {
  mealData: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardMeal;
