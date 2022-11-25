import Navbar from "@components/Navbar/navbar";
import React from "react";
import CardMeal from "@components/CardMeal/CardMeal";
import CardPays from "@components/CardPays/CardPays";

function App() {
  return (
    <div className="App">
      <CardPays />
      <CardMeal />
      <Navbar />
    </div>
  );
}

export default App;
