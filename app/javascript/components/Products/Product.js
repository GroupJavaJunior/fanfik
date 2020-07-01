import React from "react";

function Product(props) {
  return (
    <li key={props.product.id}>
      {props.product.name} {props.product.count}
    </li>
  );
}

export default Product;
