import React from "react";
import "./Bracelet.css";
import jewelryData from "../../data/jewelryData.json";
import ProductGrid from "../ProductGrid";

function Bracelet() {
  const category = jewelryData.categories.find((cat) => cat.id === "bracelets");
  return (
    <div className="bracelet">
      <ProductGrid category={category} />;
    </div>
  );
}

export default Bracelet;
