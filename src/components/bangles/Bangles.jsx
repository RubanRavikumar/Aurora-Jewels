import React from "react";
import "./Bangles.css";
import jewelryData from "../../data/jewelryData.json";
import ProductGrid from "../ProductGrid";

function Bangles() {
  const category = jewelryData.categories.find((cat) => cat.id === "bangles");
  return (
    <div className="bangles">
      <ProductGrid category={category} />
    </div>
  );
}

export default Bangles;
