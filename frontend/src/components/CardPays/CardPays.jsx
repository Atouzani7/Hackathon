import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CardPays() {
  const [cardPays, setCardPays] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(({ data }) => {
        setCardPays(data.meals);
      });
  }, []);

  return (
    <>
      {cardPays.map((pays) => {
        const country = pays.strArea;
        return (
          <img
            src={`/src/components/CardPays/assets/${country}.webp`}
            alt={country}
          />
        );
      })}
    </>
  );
}
