import React from "react";
import "./Rings.css";
import jewelryData from "../../data/jewelryData.json";
import ProductGrid from "../ProductGrid";

function Rings() {
  const category = jewelryData.categories.find((cat) => cat.id === "rings");
  return (
    <div className="rings">
      <ProductGrid category={category} />
    </div>
  );
}

export default Rings;
