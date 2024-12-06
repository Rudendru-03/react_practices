import React from "react";
import Item from "./item";

const Card = () => {
  return (
    <div className="bg-slate-400 w-200 h-200 border-4 flex">
      <h4>Todays special offer on Items</h4>
      <div>
        <Item name="Shoes" price="12" id="abc11" />
        <Item name="Phone" price="40" id="abc13" />
        <Item name="T Shirt" price="10" id="abc14" />
        <Item name="Laptop" price="10000" id="abc12" />
        <Item name="Chair" price="18" id="abc15" />
        <Item name="Tab" price="5000" id="abc16" />
      </div>
    </div>
  );
};

export default Card;
