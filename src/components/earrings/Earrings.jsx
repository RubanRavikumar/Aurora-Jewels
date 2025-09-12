import React from "react";
import "./Earrings.css";
import jewelryData from "../../data/jewelryData.json";
import ProductGrid from "../ProductGrid";

function Earrings() {
  const category = jewelryData.categories.find((cat) => cat.id === "earrings");
  return (
    <div className="earrings">
      <ProductGrid category={category} />
    </div>
  );
}

export default Earrings;
