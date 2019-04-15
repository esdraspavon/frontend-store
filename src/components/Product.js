import React from "react";

const Product = props => {
  const { image, name, price, id } = props.data;
  return (
    <li>
      <img src={`img/${image}.png`} alt={name} />
      <p>
        {name} <span>$ {price}</span>
      </p>
      <a href="#">Más información</a>
    </li>
  );
};

export default Product;
