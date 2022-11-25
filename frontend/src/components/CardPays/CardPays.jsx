import { useState, useEffect } from "react";
import "./CardPays.css";
import axios from "axios";

export default function CardPays() {
  const [cardPays, setCardPays] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(({ data }) => {
        setCardPays(data.meals || []);
      });
  }, []);

  return (
    <section className="container-1">
      {cardPays.map((pays) => {
        const country = pays.strArea;
        return (
          <img
            className="card-2 card-images car-2"
            src={`/src/components/CardPays/assets/${country}.webp`}
            alt={country}
            key={country}
          />
        );
      })}
    </section>
  );
}
