import React from "react";

const Item = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{"$" + props.price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Item;
