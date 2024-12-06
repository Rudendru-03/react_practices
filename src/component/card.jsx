import React from "react";
import Item from "./item";

const Card = () => {
  return (
    <div className="bg-slate-400 w-200 h-200 border-4">
      <h4>Todays special offer on Items</h4>
      <Item name="Shoes" price="12" />
    </div>
  );
};

export default Card;
